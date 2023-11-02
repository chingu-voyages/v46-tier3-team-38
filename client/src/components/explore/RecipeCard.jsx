export default function RecipeCard({recipeData}){
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-1 sm:m-5">
            <img className="w-full" src={recipeData.images.REGULAR.url} alt={`picture of ${recipeData.label}.`}/>
            <div className="px-2 sm:px-6 py-4">
                <h3 className="text-left font-bold text-xs sm:text-sm mb-1">{recipeData.label}</h3>
                <div className="flex justify-between">
                    <p className="text-xs">{recipeData.mealType}</p>
                </div>
            </div>
        </div>
    )
}
