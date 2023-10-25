import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import RecipeList from "../components/explore/RecipeList";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        navigate(`/result/${searchTerm}`);
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
                        onChange={(e)=>setSearchTerm(e.target.value)}
                        className="bg-gray-200 grow focus:outline-none focus:bg-gray-200 max-w-full"
                        placeholder="What are you craving?"
                    />
                </form>
            </section>
        </div>
        <h2 className="font-bold text-xl mt-5">Popular dishes</h2>
        <RecipeList recipes={recipeData} />
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
