import { NavLink } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { FaSearch, FaRegSmile } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
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
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const { username,isUserLoggedIn } = useAuth();
    return (
        <>
            <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                {
                    username != null ? loggedIn(showLogoutModal, setShowLogoutModal) : loggedOut()
                }
            </nav>
            {
                showLogoutModal && logoutModal(setShowLogoutModal,isUserLoggedIn)
            }
        </>
    )
}

function loggedIn(showLogoutModal, setShowLogoutModal) {
    const handleLogout = () => {
        console.log("handleLogout");
        setShowLogoutModal(true);
    }

    return (
        <ul className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
                <NavLink to="/login" className="flex flex-col items-center" >
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
                <NavLink to="/registeration" className="flex flex-col items-center" >
                    <FaRegSmile />
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                        Profile
                    </span>
                </NavLink>
            </li>
            <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={handleLogout}>
                <div className="flex flex-col items-center">
                    <FiLogOut />
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                        Logout
                    </span>
                </div>
            </li>
        </ul>

    )
}

function loggedOut() {
    return (
        <ul className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
                <NavLink to="/login" className="flex flex-col items-center" >
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
                <NavLink to="/login" className="flex flex-col items-center" >
                    <FiLogIn />
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                        Login
                    </span>
                </NavLink>
            </li>
            <li className="flex items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
                <NavLink to="/registeration" className="flex flex-col items-center" >
                    <BsPencil />
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-blue-500">
                        Sign up
                    </span>
                </NavLink>
            </li>
        </ul>
    )
}

function logoutModal(setShowLogoutModal,isUserLoggedIn) {
    const handleLogout = () => {
        localStorage.removeItem("token");
        setShowLogoutModal(false);
        isUserLoggedIn();
    }

    const handleCancel = () => {
        setShowLogoutModal(false);
    }

    return (<div id="popup-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center">
        <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button onClick={handleCancel} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center">
                    <svg className="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-white">Are you sure you want to logout ?</h3>
                    <button onClick={handleLogout} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Yes, I&apos;m sure
                    </button>
                    <button onClick={handleCancel} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No</button>
                </div>
            </div>
        </div>
    </div>);
}