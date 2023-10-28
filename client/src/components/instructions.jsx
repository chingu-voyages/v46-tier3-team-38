import PropTypes from 'prop-types';

const instructions = ({ instructions }) => {
  const numberOfSteps = instructions.length;
  return (
    <div className='px-4 pb-8'>
      <p className="text-black text-xl font-bold font-['Inter'] leading-loose tracking-wide mb-3">Instructions<span className="opacity-50 text-black text-xs font-normal font-['Helvetica'] leading-tight">{`  ${numberOfSteps} Steps`}</span></p>
      <div className='flex flex-col gap-2 w-full'>
        {instructions.map((stepInfo, stepIndex) => (
          <div key={stepIndex} className='p-2.5 bg-white rounded-md shadow-[rgba(0,0,0,0.25)_0px_0px_5px_0px] justify-start items-start flex flex-col gap-2'>
            <p className="text-black text-sm font-bold font-['Abhaya Libre'] leading-tight">{`Step ${stepIndex+1}`}<span className="text-neutral-400 text-[0.7rem] font-normal font-['Helvetica'] leading-tight">{'/'+numberOfSteps}</span>
            </p>
            <p className="text-black text-sm font-normal font-['Helvetica'] leading-tight">{stepInfo}</p>
            {/* <ul className='list-disc'>
              {stepInfo.steps.map((step, subStepIndex) => (<li key={subStepIndex} className="text-black text-sm font-normal font-['Helvetica'] leading-tight">{step}</li>))}
            </ul> */}
          </div>
        ))}
      </div>
    </div>
  )
}

instructions.propTypes = {
  instructions: PropTypes.array,
}

export default instructions;