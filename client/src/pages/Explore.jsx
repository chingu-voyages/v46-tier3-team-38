import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import RecipeList from "../components/explore/RecipeList";
import { useNavigate } from "react-router-dom";
import BackendAPI from "../helper/BackendApi";

const recipeData =[
    {   recipe:{
            images:{
            REGULAR:{
                    url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
            },
            label: "Avocado salad with tomatoes",
            mealType: "Breakfast"
        }
    },
    {   recipe:{
            images:{
            REGULAR:{
                    url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
            },
            label: "Avocado salad with tomatoes",
            mealType: "Breakfast"
        }
    },  
    {   recipe:{
            images:{
            REGULAR:{
                    url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
            },
            label: "Avocado salad with tomatoes",
            mealType: "Breakfast"
        }
    },
    {   recipe:{
            images:{
            REGULAR:{
                    url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
            },
            label: "Avocado salad with tomatoes",
            mealType: "Breakfast"
        }
    },
    {   recipe:{
            images:{
            REGULAR:{
                    url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
            },
            label: "Avocado salad with tomatoes",
            mealType: "Breakfast"
        }
    },  
    {   recipe:{
            images:{
            REGULAR:{
                    url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
            },
            label: "Avocado salad with tomatoes",
            mealType: "Breakfast"
        }
    },

    
];



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
        <main className="m-5">
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
