import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeList from "../components/explore/RecipeList";
import axios from 'axios';
import backendAPI from "../helper/BackendApi";


export default function SearchResult(){
    const { term } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        getRecipes(term); 
    }, [])

    async function getRecipes(term){
        console.log(`is this running?`)
        try{
            const response = await backendAPI.searchRecipe(term);
            console.log("🚀 ~ file: SearchResult.jsx:22 ~ getRecipes ~ response:", response)
            setRecipes(response);
        } catch(e){
            console.log('something went wrong inside useEffect', e)
        }
        setIsLoading(false);
    }


    if(isLoading){
        return <h1>Loading...</h1>
    }
    console.log(recipes);
    if(recipes.length===0){
        return <h1>There is no recipe matches to Your Search Term :{term}</h1>
    }
    
    return(
        <main className="m-5">
        <RecipeList recipes={recipes}/>
        </main>
    );
}