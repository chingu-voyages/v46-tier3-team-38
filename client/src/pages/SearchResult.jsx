import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeList from "../components/explore/RecipeList";
import BackendAPI from "../helper/BackendApi";


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