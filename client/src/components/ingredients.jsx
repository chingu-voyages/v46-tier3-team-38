import PropTypes from 'prop-types';
ingredients.propTypes = {
  ingredients: PropTypes.object,
}

const ingredients = ({ ingredients }) => {
  return (
    <div >
      <p className="text-black text-xl font-bold font-['Inter'] leading-loose tracking-wide mb-3">Ingredients</p>
      <div className='flex flex-row flex-no-wrap justify-between items-start rounded-lg bg-white shadow p-1.5'>
        <ul className="list-disc ">
          {ingredients.map((ingredient) => (<li key={ingredient.name} className="text-black text-sm font-normal font-['Helvetica'] leading-tight tracking-tight">
            {ingredient.name}
          </li>
          ))}
        </ul>
        <p className="text-right text-black text-sm font-normal font-['Helvetica'] leading-tight tracking-tight">{`${ingredients.calories} calories`}</p>
      </div>
    </div>
  )
}

export default ingredients;