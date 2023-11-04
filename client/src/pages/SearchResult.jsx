import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeList from "../components/explore/RecipeList";
import BackendAPI from "../helper/BackendApi";
import Loader from "../components/Loader";

/**
 
 * SearchResult Component page
 *
 * SearchResult component shows list of recipes using RecipeCard component as a page
 *@component
 */

export default function SearchResult(){
    const { term } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        
        async function getRecipes(term){
            console.log(`is this running?`)
            try{
                const response = await BackendAPI.searchRecipe(term);
                setRecipes(response);
            } catch(e){
                console.log('something went wrong inside useEffect', e)
            }
            setIsLoading(false);
        }

        setIsLoading(true);
        getRecipes(term); 
    }, [term])

    if(isLoading){
        return <Loader />
    }

    return(
        <main className="m-5 text-center max-w-screen-xl mx-auto">
            {recipes.length===0
                ?(<h1>There is no recipe matches to Your Search Term :{term}</h1>)
                :(<RecipeList recipes={recipes}/>)
            }
        </main>
    );
}