import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search(){
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <div>
            <section>
                <h1 className="mb-3 text-3xl text-left">Explore</h1>
                <div className="bg-gray-200 rounded-xl flex items-center p-3">
                    <FaSearch className="mr-2"/>
                    <input
                        type="text"
                        id="term"
                        name="term"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-gray-200 grow focus:outline-none focus:bg-gray-200 max-w-full"
                        placeholder="What are you craving?"
                    />
                </div>
            </section>
            {/* <section className="mt-5">
                <h2 className="font-bold text-xl">Type of Cuisine</h2>
                {cuisines.map((c, idx) =>(
                    <button key={idx} className="">{c}</button>
                ))}
            </section>       
            <section className="mt-5">
                <h2 className="font-bold text-xl">Popular searches</h2>
            </section>        */}
        </div>
 
    )
}