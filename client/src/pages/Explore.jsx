import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import RecipeList from "../components/explore/RecipeList";
import { useNavigate } from "react-router-dom";
import BackendAPI from "../helper/BackendApi";

export default function Explore(){
    const navigate = useNavigate();
    const [randomRecipe, setRandomRecipe] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        console.log(`useEffect ran`)
        async function getRecipe(){
            try{
                let response = await BackendAPI.getRandomRecipe();
                setRandomRecipe(response);
            } catch (e){
                console.log("error", e);
            }
        }
        getRecipe();
    },[])

    function handleSubmit(e){
        e.preventDefault();
        if(!searchTerm){
            setError("You cannot search an empty word.");
        } else{
            navigate(`/result/${searchTerm}`);
        }
    }

    function handleChange(e){
        setSearchTerm(e.target.value);
        setError("");
    }

    if(!randomRecipe){
        return <h1>Loading...</h1>
    }
    
    return(
        <main className="sm:mb-5">
        <div>
            <section>
                <h1 className="mb-3 text-3xl text-left">Explore</h1>
                <form id="search" className="bg-gray-200 rounded-xl flex items-center p-3">
                    <FaSearch className="mr-2"/>
                    <input
                        type="text"
                        id="term"
                        name="term"
                        onChange={handleChange}
                        className="bg-gray-200 grow focus:outline-none focus:bg-gray-200 max-w-full"
                        placeholder="What are you craving?"
                    />
                </form>
                <p className="text-left text-red-500 font-bold"><small>{error}</small></p>
            </section>
        </div>
        <h2 className="font-bold text-xl mt-5">Popular dishes</h2>
        <RecipeList recipes={randomRecipe} />
        <button 
            type="submit" 
            form="search" 
            onClick={(e)=>handleSubmit(e)}
            className="bg-gray-200 rounded-lg w-full p-1 mt-2"> 
            Search 
        </button>
        </main>
    );
}
