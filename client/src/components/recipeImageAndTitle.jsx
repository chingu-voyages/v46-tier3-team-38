import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeImageAndTitle = ({ recipeImage, recipeTitle }) => {
    const [bookmarkRecipe, setBookmarkRecipe] = useState(false);
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }

    const handleBookmarkClick = () => {
        setBookmarkRecipe(!bookmarkRecipe);
    }

    return (
        <div className="h-80 w-full relative">
            <img className="h-80 w-full" src={recipeImage} />
            <div className="left-4 top-[80%] p-2.5 absolute text-white text-xl font-bold font-['Inter'] leading-normal tracking-wide rounded-md backdrop-blur-md">{recipeTitle}</div>
            <div className="top-[5%] px-4 absolute w-full flex flex-row justify-between flex-nowrap items-center">
                <button type="button" onClick={handleBackClick} className="backdrop-blur-md rounded-full">
                    <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="sr-only">Back button</span>
                </button>
                <button type="button" onClick={handleBookmarkClick} className="backdrop-blur-md rounded-full">
                    {bookmarkRecipe ? <svg className="w-5 h-5 m-[0.6rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='#185b40'><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" /></svg> :
                        <svg className="w-7 h-7 m-[0.4rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>}
                    <span className="sr-only">Bookmark button</span>
                </button>

            </div>
        </div>
    )
}

RecipeImageAndTitle.propTypes = {
    recipeImage: PropTypes.string,
    recipeTitle: PropTypes.string
}

export default RecipeImageAndTitle