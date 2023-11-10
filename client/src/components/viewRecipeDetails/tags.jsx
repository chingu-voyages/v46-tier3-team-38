/**
 * Tags Component
 *
 * The Tags component displays healthy labels and cautions. It provides options to bookmark the recipe.
 *
 * @component
 *
 * @param {object} props - The component's properties.
 * @param {string} props.healthLabels - Health Labels tags of the recipe.
 * @param {string} props.cautions - Cautions tags of the recipe.
 * @param {string} props.recipeID - recipeID of the recipe.
 *
 * @returns {JSX.Element} - A React component that renders the recipe health labels, cautions tags, and favorite buttons.
*/


import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth } from "../../context/AuthContext";
import BackendAPI from '../../helper/BackendApi';
import Error from '../error';

const Tags = ({ healthLabels, cautions, recipeID }) => {
    const { username, favouriteRecipesOfUser,setFavouriteRecipesOfUser } = useAuth();
    const isRecipeFavourites = favouriteRecipesOfUser.includes(recipeID);
    const [saveToFavourites, setsaveToFavourites] = useState(isRecipeFavourites || false);
    const [error, setError] = useState(null);

    const handleFavouriteButtonClick = async () => {
        if (username != null) {
            try {
                await BackendAPI.addRemoveFromFavourites(!saveToFavourites, username, recipeID);
                setFavouriteRecipesOfUser(recipeID);
            } catch (error) {
                if(saveToFavourites){
                    setError("Error in removing favourite recipe");
                }else{
                    setError("Error in saving favourite recipe");
                }
            }

        }
        setsaveToFavourites(!saveToFavourites);
    }
    return (
        <>
            {
                error != null && <Error error={error} />
            }
            <div className='flex flex-row flex-nowrap items-start lg:items-center justify-between gap-2 px-4'>
                <div className='flex flex-row flex-wrap items-start gap-2'>
                    {healthLabels.map((tag, index) => (
                        <div key={index} className="p-2.5 bg-teal-700 bg-opacity-20 rounded-[20px] justify-center items-center gap-[5px] inline-flex">
                            <div className="text-neutral-700 text-sm font-normal font-['Helvetica'] leading-tight tracking-tight">{tag}</div>
                        </div>
                    ))}
                    {cautions.map((tag, index) => (
                        <div key={index} className="p-2.5 bg-red-700 bg-opacity-20 rounded-[20px] justify-center items-center gap-[5px] inline-flex">
                            <div className="text-neutral-700 text-sm font-normal font-['Helvetica'] leading-tight tracking-tight">{tag}</div>
                        </div>
                    ))}
                </div>
                <button className="backdrop-blur-md rounded-full"
                    style={{ background: 'radial-gradient(36.25% 48.06% at 28.61% 45.98%,rgba(249.69, 0, 0, 0.49) 0%,rgba(255, 153, 153, 0.4) 0%,rgba(180.62, 210.37, 255, 0.28) 92%' }} onClick={handleFavouriteButtonClick}>
                    {saveToFavourites ?
                        <svg className="w-5 h-5 m-[0.75rem] text-[red]" xmlns="http://www.w3.org/2000/svg" height="1.2em" width="1.2em" viewBox="0 0 512 512" style={{ fill: '#ff0000' }}><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg> : <svg className="w-5 h-5 m-[0.75rem] text-[red]" xmlns="http://www.w3.org/2000/svg" height="1.2em" width="1.2em" viewBox="0 0 512 512" style={{ fill: '#ff0000' }}><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                    }
                </button>
            </div>
            <hr className="h-px mx-4 my-1 bg-gray-300 border-0" />
        </>
    );
}

Tags.propTypes = {
    healthLabels: PropTypes.array,
    cautions: PropTypes.array,
    recipeID: PropTypes.string,
}

export default Tags;