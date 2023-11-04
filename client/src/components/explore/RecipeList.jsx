import RecipeCard from "./RecipeCard";

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

export default function RecipeList({recipes}){
    return(
        <section className="mt-5 mx-auto">
            <div className="grid grid-cols-3 justify-items-center">
                     {recipes.map((r,idx) =>(
                    <RecipeCard key={idx} recipeData={r.recipe} />
                ))}
            </div>
        </section>
    )
}