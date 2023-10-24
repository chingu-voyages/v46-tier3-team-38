import RecipeCard from "./RecipeCard";

const recipeData =[
    {   id:1,
        url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Avocado salad with tomatoes",
        mealType: "Breakfast",
        totalMins: "20m"
    },
    {   id:2,
        url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Avocado salad with tomatoes",
        mealType: "Breakfast",
        totalMins: "20m"
    },
    {   id:3,
        url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Avocado salad with tomatoes",
        mealType: "Breakfast",
        totalMins: "20m"
    },
    {   id:4,
        url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Avocado salad with tomatoes",
        mealType: "Breakfast",
        totalMins: "20m"
    },
    {   id:5,
        url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Avocado salad with tomatoes",
        mealType: "Breakfast",
        totalMins: "20m"
    },
    {   id:6,
        url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Avocado salad with tomatoes",
        mealType: "Breakfast",
        totalMins: "20m"
    }
];


export default function RecipeList(){
    return(
        <section className="mt-5">
            <h2 className="font-bold text-xl">Popular dishes</h2>
            <div className="grid grid-cols-3">
                     {recipeData.map(r =>(
                    <RecipeCard key={r.id} recipeData={r} />
                ))}
            </div>
        </section>
    )
}