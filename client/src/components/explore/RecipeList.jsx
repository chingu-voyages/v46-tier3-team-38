/**
 * RecipeList Component
 *
 * The RecipeCard component displays recipe image, tile and meal type 
 * Each RecipeCard is linked to ViewRecipeDetails Component
 *
 * @component
 * 
 * @param {object} props - The component's properties.
 * @param {array} props.recipes - array of recipe objects
 * @returns {JSX.Element} - A React component that renders list of recipeCards.
*/

import RecipeCard from "./RecipeCard";
import PropTypes from 'prop-types';

RecipeList.propTypes = {
    recipes: PropTypes.array,
}

export default function RecipeList({ recipes }) {
    return (
        <section className="mt-5 mb-12 mx-auto">
            <div className="grid grid-cols-3 justify-items-center">
                {recipes.map((r, index) => (
                    <RecipeCard key={index} recipe={r.recipe} />
                ))}
            </div>
        </section>
    )
}