/**
 
 * SearchResult Component
 *
 * The SearchResult function is a component that displays a list of recipes based on a search term. The function also calls the searchRecipe method from the BackendAPI class to fetch the recipes based on the search term. If there are no recipes found, it displays a message indicating that there are no matching recipes.
 * 
 * @component
 */

import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import RecipeList from "../components/explore/RecipeList";
import BackendAPI from "../helper/BackendApi";
import Loader from "../components/Loader";


export default function SearchResult(){
    const { term } = useParams();
    const { state } = useLocation();
    console.log('state', state);
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const params = {q:term, ...state};
    console.log(params);

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
        getRecipes(params); 
    }, [term])

    if(isLoading){
        return <Loader />
    }
    function listOfFilter(filterObj){
        const arrayList = []
        for(const key in filterObj){
            let str = key + ": " + filterObj[key].join(", ");
            arrayList.push(str);
        }
        return arrayList;
    }

    return(
        <main className="mt-10 text-center max-w-screen-xl mx-auto h-full">
            {recipes.length===0
                ?(
                <div className="m-auto w-11/12 sm:w-8/12">
                    <h1 className="text-xl sm:text-2xl font-bold mb-5">There is no recipe matches to your search term: {term}</h1>
                    {state
                    ?( <ul className="flex flex-col items-start text-left bg-yellow-50 rounded p-5">
                        <h3 className="text-lg font-bold">Filter applied:</h3>
                        {listOfFilter(state).map((item, index)=>(
                           <li key={index}>{item}</li>
                           ))}
                        </ul>
                    )
                    :("")
                    }
                
                </div>)
                :(<RecipeList recipes={recipes}/>)
            }
        </main>
    );
}