import { Link } from "react-router-dom";

/**
 * RecipeCard Component
 *
 * The RecipeCard component displays recipe image, tile and meal type 
 * Each RecipeCard is linked to ViewRecipeDetails Component
 *
 * @component
 * 
 * @param {object} props - The component's properties.
 * @param {array} props.recipeData - array of data about 1 recipe.
 * @returns {JSX.Element} - A React component that renders displays recipe image, tile and meal type. 
*/

export default function RecipeCard({recipeData}){
    console.log(recipeData);
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-1 sm:m-5 transform w-fit transition duration-500 hover:scale-105">
            <Link to={`/viewRecipeDetails/${getRecipeId(recipeData.uri)}`}>
                <img className="w-full" src={recipeData.images.REGULAR.url} alt={`picture of ${recipeData.label}.`}/>
                <div className="px-2 sm:px-6 py-4">
                    <h3 className="text-left font-bold text-xs sm:text-sm mb-1">{recipeData.label}</h3>
                    <div className="flex justify-between">
                        <p className="text-xs">{recipeData.mealType}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

function getRecipeId(recipeUri){
    let cutoffIdx=recipeUri.indexOf("_");
    const recipeId =recipeUri.slice(cutoffIdx+1);
    return recipeId;
}


