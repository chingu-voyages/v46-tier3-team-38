import RecipeCard from "./RecipeCard";

export default function RecipeList({recipes}){
    return(
        <section className="mt-5">
            <div className="grid grid-cols-3">
                     {recipes.map((r,idx) =>(
                    <RecipeCard key={idx} recipeData={r.recipe} />
                ))}
            </div>
        </section>
    )
}