import PropTypes from 'prop-types';

const equipments = ({ equipments }) => {
  return (
    <div className='px-4'>
      <p className="text-black text-xl font-bold font-['Inter'] leading-loose tracking-wide mb-3">Equipments</p>
      <div className="p-2 bg-white rounded-md shadow-[rgba(0,0,0,0.25)_0px_0px_5px_0px] justify-between items-start flex gap-20">
        <ul className="list-disc list-inside">
          {equipments.map((equipmentName) => (<li key={equipmentName} className="text-sm text-black font-normal font-['Helvetica'] leading-tight tracking-wide">
            {equipmentName}
          </li>
          ))}
        </ul>
        <p className="text-sm whitespace-nowrap text-black font-normal font-['Helvetica'] leading-tight tracking-tight">{`${equipments.length} items`}</p>
      </div>
    </div>
  )
}

equipments.propTypes = {
  equipments: PropTypes.array,
}

export default equipments;
