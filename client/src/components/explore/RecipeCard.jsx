/**
 * RecipeCard Component
 *
 * The RecipeCard component displays recipe image, tile and meal type 
 * Each RecipeCard is linked to ViewRecipeDetails Component
 *
 * @component
 * 
 * @param {object} props - The component's properties.
 * @param {object} props.recipe - Recipe Info.
 * @returns {JSX.Element} - A React component that renders displays recipe image, tile and meal type. 
*/

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function getRecipeId(recipeUri) {
    let cutoffIdx = recipeUri.indexOf("_");
    const recipeId = recipeUri.slice(cutoffIdx + 1);
    return recipeId;
}

function RecipeCard({ recipe }) {
    const recipeImage = recipe.images && recipe.images.REGULAR.url;
    const recipeLabel = recipe.label;
    const mealType = recipe.mealType[0];
    const recipeID = getRecipeId(recipe.uri);
    console.log(recipe);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-1 sm:m-5 transform w-fit transition duration-500 hover:scale-105">
            <Link to={`/viewRecipeDetails/${recipeID}`}>
                <img className="w-full" src={recipeImage} alt={`picture of ${recipeLabel}.`} />
                <div className="px-2 sm:px-6 py-4">
                    <h3 className="text-left font-bold text-xs sm:text-sm mb-1">{recipeLabel}</h3>
                    <div className="flex justify-between">
                        <p className="text-xs">{mealType}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

RecipeCard.propTypes = {
    recipe: PropTypes.shape({
        images: PropTypes.shape({
            REGULAR: PropTypes.shape({
                url: PropTypes.string
            })
        }),
        label: PropTypes.string,
        mealType: PropTypes.array,
        uri: PropTypes.string
    })
};

export default RecipeCard;