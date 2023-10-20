import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => {
  return (
    <div className='px-4'>
      <p className="text-black text-xl font-bold font-['Inter'] leading-loose tracking-wide mb-3">Ingredients</p>
      <ul className="list-disc ">
        {ingredients.map((ingredient) => (<li key={ingredient.name} className='flex flex-row flex-no-wrap justify-between items-start rounded-lg bg-white shadow-md p-1.5 mb-2 gap-12'>
          <div className="text-black text-sm font-normal font-['Helvetica'] leading-tight tracking-tight">
            {ingredient.name}
          </div>
          <p className="whitespace-nowrap text-right text-black text-sm font-normal font-['Helvetica'] leading-tight tracking-tight">{`${ingredient.calories} calories`}</p>
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