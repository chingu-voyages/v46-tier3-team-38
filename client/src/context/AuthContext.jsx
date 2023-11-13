import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { jwtVerify } from 'jose';
import BackendAPI from '../helper/BackendApi';

// Create the auth context
const AuthContext = createContext();

// Create a custom provider for the auth context
const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [username, setUserName] = useState(null);
    const [bookmarkRecipesOfUser, setBookmarkRecipesOfUser] = useState([]);
    const [favouriteRecipesOfUser, setFavouriteRecipesOfUser] = useState([]);

    const isUserLoggedIn = async () => {
        const token = localStorage.getItem('token');
        const secret = new TextEncoder().encode(
            import.meta.env.VITE_JWT_SECRET_KEY
        );
        // console.log(token);
        if (token != null) {
            try {
                const decodedtoken = await jwtVerify(token, secret);
                setUserName(decodedtoken.payload.username);
                const bookmarksAndRecipesOfUser=await BackendAPI.getAllBookmarksAndFavourites(username);
                setBookmarkRecipesOfUser(bookmarksAndRecipesOfUser.bookmarks);
                setFavouriteRecipesOfUser(bookmarksAndRecipesOfUser.favourites);
                navigate('/explore');
            } catch (error) {
                console.error('Error decoding JWT token:', error.message);
                setUserName(null);
            }
        } else {
            setUserName(null);
        }
    }

    useEffect(() => {
        console.log(`auth use effect ran`)
        isUserLoggedIn();
    }, [])


    return (
        <AuthContext.Provider value={{ username, isUserLoggedIn, bookmarkRecipesOfUser, favouriteRecipesOfUser,setBookmarkRecipesOfUser,setFavouriteRecipesOfUser }}>
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