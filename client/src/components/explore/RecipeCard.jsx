export default function RecipeCard({recipeData}){
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
            <img className="w-full" src={recipeData.url} alt={`picture of ${recipeData.title}.`}/>
            <div className="px-6 py-4">
                <h3 className="font-bold text-sm">{recipeData.title}</h3>
                <div className="flex justify-between">
                    <p className="text-xs">{recipeData.mealType}</p>
                    <p className="text-xs">{recipeData.totalMins}</p>
                </div>
            </div>
        </div>
    )
}
