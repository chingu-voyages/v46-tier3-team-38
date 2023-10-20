import PropTypes from 'prop-types';

const equipments = ({ equipments }) => {
  return (
    <div>
      <p className="text-black text-xl font-bold font-['Inter'] leading-loose tracking-wide mb-3">Equipments</p>
      <div className="p-2 bg-white rounded-md shadow-md justify-between items-start flex gap-20">
        <ul className="list-disc list-inside">
          {equipments.map((equipmentName) => (<li key={equipmentName} className="text-sm text-black font-normal font-['Helvetica'] leading-tight tracking-wide">
            {equipmentName}
          </li>
          ))}
        </ul>
        <p className="whitespace-nowrap text-black font-normal font-['Helvetica'] leading-tight tracking-tight">{`${equipments.length} items`}</p>
      </div>
    </div>
  )
}

equipments.propTypes = {
  equipments: PropTypes.array,
}

export default equipments;
