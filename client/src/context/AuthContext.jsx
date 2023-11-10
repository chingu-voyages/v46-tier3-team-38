import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { jwtVerify } from 'jose';

// Create the auth context
const AuthContext = createContext();

// Create a custom provider for the auth context
const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [username, setUserName] = useState(null);

    const isUserLoggedIn=()=>{
        const token = localStorage.getItem('token');
        const secret = new TextEncoder().encode(
            'WXgeD5YPIJmoCofRkc3G66kUEtuWhliJ9lqvPGNx1GTmNYgxGJ'
        );
        console.log(token);
        if (token!=null) {
            jwtVerify(token, secret).then((decodedtoken) => {
                console.log(decodedtoken);
                setUserName(decodedtoken.payload.username);
                navigate('/explore');
            }).catch((error) => {
                console.error('Error decoding JWT token:', error.message);
                navigate('/login');
            })
        } else {
            setUserName(null);
            navigate('/login');
        }
    }

    useEffect(() => {
        isUserLoggedIn();
    }, [])


return (
    <AuthContext.Provider value={{ username,isUserLoggedIn }}>
        {children}
    </AuthContext.Provider>
);
};



// Custom hook to use the auth context
export const useAuth = () => {
    return useContext(AuthContext);
};


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
    initialToken: PropTypes.string,
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
};

export default AuthProvider;