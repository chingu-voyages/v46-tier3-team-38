import { NavLink } from "react-router-dom";
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

let currentUser = null;

export default function Navbar(){
    return (
        <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          {currentUser? loggedIn() : loggedOut()} 
        </nav>
    )
}

function loggedIn(){
    return (
    <ul className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
            <NavLink to="/" className="flex flex-col items-center" >
                <RiHomeLine />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                    Home
                </span>
            </NavLink>
        </li>
        <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
            <NavLink to="/explore" className="flex flex-col items-center" >
                <FaSearch />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                Explore
                </span>
            </NavLink>
        </li>         
        <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
            <NavLink to="/" className="flex flex-col items-center" >
                <FaRegSmile />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                Profile
                </span>
            </NavLink>
        </li>         
        <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
            <NavLink to="/" className="flex flex-col items-center" >
                <FiLogOut />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                Logout
                </span>
            </NavLink>
        </li>         
    </ul>
    )
}

function loggedOut(){
    return(
        <ul className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
            <NavLink to="/" className="flex flex-col items-center" >
                <RiHomeLine />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                    Home
                </span>
            </NavLink>
        </li>
        <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
            <NavLink to="/explore" className="flex flex-col items-center" >
                <FaSearch />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                Explore
                </span>
            </NavLink>
        </li>         
        <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
            <NavLink to="/" className="flex flex-col items-center" >
                <FiLogIn />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                Login
                </span>
            </NavLink>
        </li>         
        <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
            <NavLink to="/" className="flex flex-col items-center" >
                <BsPencil />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                Sign up
                </span>
            </NavLink>
        </li>         
    </ul>
    )
}

