import { useEffect } from "react";
import Search from "../components/explore/Search";
import RecipeList from "../components/explore/RecipeList";

export default function Explore(){
    return(
        <main className="m-5">
            <Search />
            <RecipeList />
            <button className="bg-gray-200 rounded-lg w-full p-1 mt-2"> Search </button>
        </main>
    );
}
