/**
 * Ingredients Component
 *
 * The Ingredients component displays a list of ingredients and provides
 * functionality to adjust the serving size. It calculates and displays the
 * quantity of each ingredient based on the number of servings.
 *
 * @component
 *
 * @param {object} props - The component's properties.
 * @param {array} props.ingredients - An array of ingredients to be displayed.
 *
 * @returns {JSX.Element} - A React component that renders the ingredients list.
*/

import PropTypes from 'prop-types';
import { useState } from 'react';
import { changeIngredientQuantity } from '../helper/recipeDetailsHelper';

const Ingredients = ({ ingredients }) => {
  const [numberOfPeopleToServing, setNumberOfPeopleToServing] = useState(1);
  const handleAddButtonClick = () => {
    setNumberOfPeopleToServing(numberOfPeopleToServing + 1);
  }

  const handleMinusButtonClick = () => {
    if (numberOfPeopleToServing > 1) {
      setNumberOfPeopleToServing(numberOfPeopleToServing - 1);
    }
  }

  return (
    <div className='px-4'>
      <div className='flex flex-row justify-between flex-nowrap items-center border-black' >
        <p className="text-black text-xl font-bold font-['Inter'] leading-loose tracking-wide mb-3">Ingredients<span className="h-3 opacity-50 text-black text-xs font-normal font-['Helvetica'] leading-tight"> {numberOfPeopleToServing} serving</span></p>
        <div className="grid grid-cols-2 divide-x-2 divide-black border-black border-solid border-2">
          <button type="button" className='hover:bg-gray-400 rounded-l' onClick={handleAddButtonClick}>
            <svg className='mx-2 my-1' xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
          </button>
          <button type="button" className='hover:bg-gray-400 rounded-r' onClick={handleMinusButtonClick}>
            <svg className='mx-2 my-1' xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
          </button>
        </div>
      </div>
      <ul className="list-disc ">
        {ingredients.map((ingredient) => (<li key={ingredient} className='flex flex-row flex-no-wrap justify-between items-start rounded-lg bg-white shadow-[rgba(0,0,0,0.25)_0px_0px_5px_0px] p-1.5 mb-2 gap-12'>
          <div className="text-black text-sm font-normal font-['Helvetica']  tracking-tight">
            {changeIngredientQuantity(numberOfPeopleToServing, ingredient)}
          </div>  
        </li>
        ))}
      </ul>
    </div>
  )
}

Ingredients.propTypes = {
  ingredients: PropTypes.array,
}

export default Ingredients;

//If we get calories Information for each ingredient use this:
//<p className="whitespace-nowrap text-right text-black text-sm font-normal font-/['Helvetica'] leading-tight tracking-tight">{`${ingredient.calories * numberOfPeopleToServing} calories`}</p> 