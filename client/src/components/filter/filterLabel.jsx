import PropTypes from 'prop-types';
function FilterLabel({filter,isSelected,handleFilterClick}) {
    return (
        <div className={`${isSelected ? 'bg-teal-700 bg-opacity-20':''} p-2.5 rounded-full border-2 border-black justify-center items-center text-black text-sm font-normal font-['Helvetica'] leading-tight tracking-tight`} onClick={handleFilterClick}>
            {filter}
        </div>
    )
}

FilterLabel.propTypes={
    filter:PropTypes.string,
    isSelected:PropTypes.bool,
    handleFilterClick:PropTypes.func
}

export default FilterLabel;