import PropTypes from 'prop-types';

equipments.propTypes = {
  equipments: PropTypes.array,
}
const equipments = ({ equipments }) => {
  return (
    <div >
      <p className="text-black text-xl font-bold font-['Inter'] leading-loose tracking-wide mb-3">Equipments</p>
      <div className="p-1 bg-white rounded-md shadow justify-start items-start inline-flex">
        <ul className="list-disc ">
          {equipments.map((equipmentName) => (<li key={equipmentName} className="text-black text-xs font-normal font-['Helvetica'] leading-tight tracking-wide">
            {equipmentName}
          </li>
          ))}
        </ul>
        <p className="text-right text-black text-sm font-normal font-['Helvetica'] leading-tight tracking-tight">{`${equipments.length} items`}</p>
      </div>
    </div>
  )
}

export default equipments;
