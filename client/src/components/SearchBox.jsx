import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox(){
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <div>
            <div>
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
            </div>
            <button className="bg-gray-200 rounded-lg w-full p-1 mt-2"> Search </button>
        </div>
 
    )
}