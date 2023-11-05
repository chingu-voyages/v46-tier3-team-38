/**
 * Explore Component
 * The Explore component displays a search form, a list of popular dishes, and a button to search for recipes. 
 * @component
*/

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuSettings2 } from 'react-icons/lu';
// import { FaSearch } from "react-icons/fa";
import RecipeList from "../components/explore/RecipeList";
import BackendAPI from "../helper/BackendApi";
import Loader from "../components/Loader";
import Error from "../components/error";
import Filter from "../components/filter/filter";


export default function Explore() {
    const navigate = useNavigate();
    const [randomRecipe, setRandomRecipe] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState("");
    const [searchFilter, setSearchFilter] = useState({});
    const [isFilter, setIsFilter] = useState(false);

    useEffect(() => {
        // console.log(`useEffect ran`)
        getRecipe();
    }, [])

    useEffect(()=>{
        console.log(searchFilter);
    },[isFilter,searchFilter])

    async function getRecipe() {
        try {
            const response = await BackendAPI.getRandomRecipe();
            setRandomRecipe(response);
        } catch (e) {
            console.log("error", e);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!searchTerm) {
            setError("You cannot search an empty word.");
        } else {
            navigate(`/result/${searchTerm}`);
        }
    }

    function handleChange(e) {
        setSearchTerm(e.target.value);
        setError("");
    }

    function handleFilterButtonClick() {
        setIsFilter(!isFilter);
    }

    if (!randomRecipe) {
        return <Loader />
    }

    return (
        isFilter ? 
        <Filter searchFilter={searchFilter} setSearchFilter={setSearchFilter} handleBackClick={handleFilterButtonClick}/> 
        :
            <main className="p-5 sm:mb-5 text-center max-w-screen-xl mx-auto">
                <div>
                    <section>
                        <h1 className="mb-3 text-3xl text-left font-bold">Explore<LuSettings2 className="float-right p-1 bg-gray-100 h-8 w-8 rounded-full" onClick={() => { handleFilterButtonClick() }} /></h1>
                        <form>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <input type="search" id="default-search" className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500" placeholder="What are you craving?" onChange={handleChange} required />
                                <button type="submit" onClick={(e) => handleSubmit(e)} className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>

                            </div>
                        </form>
                        {error.length > 0 && <Error error={error} />}
                    </section>
                    <h2 className="font-bold text-xl mt-5">Popular dishes</h2>
                    <RecipeList recipes={randomRecipe} />
                </div>
            </main>
    );
}

/* 
<form id="search" className="sm:flex">
    <div className="bg-gray-200 rounded-xl flex items-center p-3 w-full">
        <FaSearch className="mr-2" />
        <input
            type="text"
            id="term"
            name="term"
            onChange={handleChange}
            className="bg-gray-200 grow focus:outline-none focus:bg-gray-200 max-w-full"
            placeholder="What are you craving?"
        />
    </div>
    <button
        type="submit"
        form="search"
        onClick={(e) => handleSubmit(e)}
        className="bg-gray-200 rounded-lg w-full hidden sm:inline-block sm:w-24 p-1 mt-2 sm:mt-0 sm:ml-2 hover:bg-green-600 hover:text-white">
        Search
    </button>
</form> 
*/
/* 
<button
    type="submit"
    form="search"
    onClick={(e) => handleSubmit(e)}
    className="bg-gray-200 rounded-lg w-full sm:hidden p-1 mt-2 hover:bg-green-600 hover:text-white mb-12">
    Search
</button> 
*/