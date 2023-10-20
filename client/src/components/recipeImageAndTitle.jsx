import PropTypes from 'prop-types';

const recipeImageAndTitle = ( {recipeImage, recipeTitle} ) => {
    return (
        <div className="h-80 w-full relative">
            <img className="h-80 w-full" src={recipeImage} />
            <div className="left-[2%] top-[80%] p-2.5 absolute text-white text-xl font-bold font-['Inter'] leading-normal tracking-wide rounded-md backdrop-blur-md">{recipeTitle}</div>
        </div>
    )
}

recipeImageAndTitle.propTypes = {
    recipeImage: PropTypes.string,
    recipeTitle: PropTypes.string
}

export default recipeImageAndTitle