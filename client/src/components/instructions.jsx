import PropTypes from 'prop-types';
instructions.propTypes = {
  instructions: PropTypes.array,
}
const instructions = ({ instructions }) => {
  const numberOfSteps = instructions.length;
  return (
    <div>
      <p className="text-black text-xl font-bold font-['Inter'] leading-loose tracking-wide mb-3">Instructions<span className="opacity-50 text-black text-xs font-normal font-['Helvetica'] leading-tight">{`  ${numberOfSteps} Steps`}</span></p>
      <div className='flex flex-col gap-5'>
        {instructions.map((stepInfo, stepIndex) => (
          <div key={stepIndex} className='p-2.5 bg-white rounded-md shadow justify-start items-start inline-flex'>
            <p className="text-black text-sm font-bold font-['Abhaya Libre'] leading-tight">{`Step ${stepInfo}`}<span className="text-neutral-400 text-xs font-normal font-['Helvetica'] leading-tight">{`/${numberOfSteps}`}</span></p>
            <p className="text-black text-sm font-normal font-['Helvetica'] leading-tight">{stepInfo.title}</p>
            <ul className='list-disc'>
              {stepInfo.steps.map((step, subStepIndex) => (<li key={subStepIndex} className="text-black text-sm font-normal font-['Helvetica'] leading-tight">{step}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default instructions;