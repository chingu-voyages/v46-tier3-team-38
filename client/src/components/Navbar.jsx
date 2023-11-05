import { NavLink, useLocation } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { FaSearch, FaRegSmile } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";

/** Navbar component
    depending on the user state, shown items should
    When user is logged in:
    Shows: Home, Explore, Profile, Logout

    When user is not logged in:
    Shows: Home, Explore, Signup, Login

    profile, logout, signUp login route need to be editted after we have user authentication information.
    currently manually setting currently user as null.
 */

export default function Navbar() {
    const currentUser = null;
    const location = useLocation();
    const { pathname } = location;
    console.log(pathname);
    return (
        <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
            {currentUser ? loggedIn(pathname) : loggedOut(pathname)}
        </nav>
    )
}

function loggedIn(pathname) {
    return (
        <ul className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <li className="flex items-center justify-center px-5 hover:bg-gray-50 group" >
                <NavLink to="/" className="flex flex-col items-center" >
                    <RiHomeLine className={`${pathname.includes('/') ? 'text-teal-700 p-1 rounded-md shadow' : ''} w-8 h-8 p-1`} />
                    <span className={`${pathname.includes('/') ? 'text-teal-700' : ''} text-sm text-gray-500 group-hover:text-green-600 `}>
                        Home
                    </span>
                </NavLink>
            </li>
            <li className="flex items-center justify-center px-5 hover:bg-gray-50 group" >
                <NavLink to="/explore" className="flex flex-col items-center" >
                    <FaSearch className={`${pathname.includes('/') ? 'text-teal-700 p-1 rounded-md shadow' : ''}`} />
                    <span className={`${pathname.includes('explore') ? 'text-teal-700' : ''} text-sm text-gray-500 group-hover:text-green-600 `}>
                        Explore
                    </span>
                </NavLink>
            </li>
            <li className="flex items-center justify-center px-5 hover:bg-gray-50 group" >
                <NavLink to="/" className="flex flex-col items-center" >
                    <FaRegSmile className={`${pathname.includes('/') ? 'text-teal-700 p-1 rounded-md shadow' : ''} w-8 h-8`} />
                    <span className={`${pathname.includes('/') ? 'text-teal-700' : ''} text-sm text-gray-500 group-hover:text-green-600 `}>
                        Profile
                    </span>
                </NavLink>
            </li>
            <li className="flex items-center justify-center px-5 hover:bg-gray-50 group" >
                <NavLink to="/" className="flex flex-col items-center" >
                    <FiLogOut className={`${pathname.includes('/') ? 'text-teal-700 p-1 rounded-md shadow' : ''} w-8 h-8`} />
                    <span className={`${pathname.includes('/') ? 'text-teal-700' : ''} text-sm text-gray-500 group-hover:text-green-600 `}>
                        Logout
                    </span>
                </NavLink>
            </li>
        </ul>
    )
}

function loggedOut(pathname) {
    return (
        <ul className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <li className="flex items-center justify-center px-5 hover:bg-gray-50  group" >
                <NavLink to="/" className="flex flex-col items-center" >
                    <RiHomeLine className={`${pathname.includes('/') ? 'text-teal-700 p-1 rounded-md shadow' : ''} w-8 h-8`} />
                    <span className={`${pathname.includes('/') ? 'text-teal-700' : ''} text-sm text-gray-500 group-hover:text-green-600 `}>
                        Home
                    </span>
                </NavLink>
            </li>
            <li className="flex items-center justify-center px-5 hover:bg-gray-50  group" >
                <NavLink to="/explore" className="flex flex-col items-center" >
                    <FaSearch className={`${pathname.includes('explore') ? 'w-8 text-teal-700 p-1 rounded-md shadow' : ''} w-5 h-8`} />
                    <span className={`${pathname.includes('explore') ? 'text-teal-700' : ''} text-sm text-gray-500 group-hover:text-green-600 `}>
                Explore
                </span>
            </NavLink>
        </li>         
        <li className="flex items-center justify-center px-5 hover:bg-gray-50  group" >
            <NavLink to="/" className="flex flex-col items-center" >
                <FiLogIn className={`${pathname.includes('/') ? 'text-teal-700 p-1 rounded-md shadow' : ''} w-8 h-8`}/>
                <span className={`${pathname.includes('/') ? 'text-teal-700' : ''} text-sm text-gray-500 group-hover:text-green-600 `}>
                Login
                </span>
            </NavLink>
        </li>         
        <li className="flex items-center justify-center px-5 hover:bg-gray-50  group" >
            <NavLink to="/" className="flex flex-col items-center" >
                <BsPencil className={`${pathname.includes('/') ? 'text-teal-700 p-1 bg-white rounded-md shadow' : ''} w-8 h-8`} />
                    <span className={`${pathname.includes('/') ? 'text-teal-700' : ''} text-sm text-gray-500 group-hover:text-green-600 `}>
                        Sign up
                    </span>
                </NavLink>
            </li>
        </ul>
    )
}

