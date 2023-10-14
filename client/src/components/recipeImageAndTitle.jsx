import PropTypes from 'prop-types';

recipeImageAndTitle.propTypes = {
    recipeImage: PropTypes.string,
    recipeTitle: PropTypes.string
}

const recipeImageAndTitle = ({ recipeImage, recipeTitle }) => {
    return (
        <div className="h-80 relative">
            <img className="h-80 left-0 top-0 absolute" src={recipeImage} />
            <div className="h-20 left-[20px] top-[222px] absolute bg-zinc-500 rounded-xl border-4 backdrop-blur-md" />
            <div className="left-[35px] top-[237px] absolute text-white text-xl font-bold font-['Inter'] leading-normal tracking-wide">{recipeTitle}</div>
        </div>
    )
}

export default recipeImageAndTitle