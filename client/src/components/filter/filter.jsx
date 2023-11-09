import PropTypes from 'prop-types';
import FilterLabel from './filterLabel';

function Filter({ searchFilter, setSearchFilter,handleBackClick }) {
    const cusineTypes = ['American', 'Asian', 'British', 'Caribbean', 'Central Europe', 'Chinese', 'Eastern Europe', 'French', 'Indian', 'Italian', 'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'South American', 'South East Asian'];
    const dishTypes = ['Biscuits and cookies', 'Bread', 'Cereals', 'Condiments and sauces', 'Desserts', 'Drinks', 'Main course', 'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches', 'Side dish', 'Soup', 'Starter', 'Sweets']
    const mealTypes = ['Breakfast', 'Dinner', 'Lunch', 'Snack', 'Teatime'];
    const dietTypes = ['Balanced', 'High Fiber', 'High Protein', 'Low Carb', 'Low fat', 'Low Sodium'];
    const healthLabels = ["Alcohol Cocktail", "Alcohol Free", "Celery Free", "Crustacean Free", "Dairy Free", "Egg Free", "Fish Free", "Fodmap Free", "Gluten Free", "Immuno Supportive", "Keto Friendly", "Kidney Friendly", "Low Potassium", "Low Sugar", "Lupine Free", "Mollusk Free", "Mustard Free", "No Oil Added", "Peanut Free", "Pescatarian", "Pork Free", "Red Meat Free", "Sesame Free", "Shellfish Free", "Soy Free", "Sugar Conscious", "Sulfite Free", "Tree Nut Free", "Vegan", "Vegetarian", "Wheat Free"]


    const handleClearClick = () => {
        setSearchFilter({});
    }

    const handleFilterClick = (type, filter) => {
        const updatedSearchFilter = { ...searchFilter }; // Create a new object
        if (type in updatedSearchFilter) {
            const index = updatedSearchFilter[type].indexOf(filter);
            if (index !== -1) {
                if ((index + 1) <= updatedSearchFilter[type].length) {
                    updatedSearchFilter[type].splice(index, index + 1);
                } else {
                    updatedSearchFilter[type].splice(index)
                }
            } else {
                updatedSearchFilter[type].push(filter);
            }
        } else {
            updatedSearchFilter[type] = [filter];
        }

        //console.log(JSON.stringify(updatedSearchFilter));

        setSearchFilter(updatedSearchFilter);
    }

    const formatFilter = (filter) => {
        return filter.toLowerCase().replace(/ /g, '-');
    }

    const checkFilterSelected = (type, filter) => {
        if (type in searchFilter) {
            return searchFilter[type].indexOf(filter) !== -1
        } else {
            return false;
        }
    }

    return (
        <div className='mx-4 my-4'>
            <button type="button" onClick={()=>{handleBackClick()}} className=" bg-teal-700 bg-opacity-20  rounded-full">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="sr-only">Back button</span>
            </button>
            <div className='flex justify-between items-center'>
                <p className='text-black text-3xl font-bold font-[DM Serif Display] leading-[50px] tracking-wide'>Filter</p>
                <button className='text-teal-700 text-sm font-medium font-[Inter] leading-[50px] tracking-wide' onClick={handleClearClick}>Clear all</button>
            </div>
            <div className='my-4'>
                <p className='text-black text-lg font-semibold font-[Inter] leading-tight tracking-wide my-2'>Types of Cusine</p>
                <div className='flex flex-wrap flex-row justify-start items-center gap-2.5'>
                    {
                        cusineTypes.map((cusine, index) =>
                            <FilterLabel key={index} filter={cusine} isSelected={checkFilterSelected('cuisineType', cusine)} handleFilterClick={() => handleFilterClick('cuisineType', cusine)} />
                        )}
                </div>
            </div>
            <div className='my-4'>
                <p className='text-black text-lg font-semibold font-[Inter] leading-tight tracking-wide my-2'>Dish type</p>
                <div className='flex flex-wrap flex-row justify-start items-center gap-2.5'>
                    {
                        dishTypes.map((dish, index) =>
                            <FilterLabel key={index} filter={dish} isSelected={checkFilterSelected('dishType', dish)} handleFilterClick={() => handleFilterClick('dishType', dish)} />
                        )
                    }
                </div>
            </div>
            <div className='my-4'>
                <p className='text-black text-lg font-semibold font-[Inter] leading-tight tracking-wide my-2'>Meal type</p>
                <div className='flex flex-wrap flex-row justify-start items-center gap-2.5'>
                    {
                        mealTypes.map((meal, index) =>
                            <FilterLabel key={index} filter={meal} isSelected={checkFilterSelected('mealType', meal)} handleFilterClick={() => handleFilterClick('mealType', meal)} />
                        )
                    }
                </div>
            </div>
            <div className='my-4'>
                <p className='text-black text-lg font-semibold font-[Inter] leading-tight tracking-wide  my-2'>Diet type</p>
                <div className='flex flex-wrap flex-row justify-start items-center gap-2.5'>
                    {
                        dietTypes.map((diet, index) =>
                            <FilterLabel key={index} filter={diet} isSelected={checkFilterSelected('diet', formatFilter(diet))} handleFilterClick={() => handleFilterClick('diet', formatFilter(diet))} />
                        )
                    }
                </div>
            </div>
            <div className='my-4'>
                <p className=' text-black text-lg font-semibold font-[Inter] leading-tight tracking-wide  my-2'>Health labels</p>
                <div className='flex flex-wrap flex-row justify-start items-center gap-2.5'>
                    {
                        healthLabels.map((health, index) =>
                            <FilterLabel key={index} filter={health} isSelected={checkFilterSelected('health', formatFilter(health))} handleFilterClick={() => handleFilterClick('health', formatFilter(health))} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

Filter.propTypes = {
    searchFilter: PropTypes.object,
    setSearchFilter: PropTypes.func,
    handleBackClick:PropTypes.func
}

export default Filter;