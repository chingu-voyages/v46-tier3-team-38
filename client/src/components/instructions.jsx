/**
 * Instructions Component
 *
 * The Instructions component displays a button that, when clicked, redirects to a recipe link.
 *
 * @component
 *
 * @param {object} props - The component's properties.
 * @param {string} props.instructions - The URL to which the button should redirect.
 *
 * @returns {JSX.Element} - A React component that renders the Instructions.
*/


import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const instructions = ({ instructions }) => {
  return (
    <div className='px-4 pb-8'>
      <p className="text-black text-xl font-bold font-['Inter'] leading-loose tracking-wide mb-3">Instructions</p>
      <Link to={instructions}>
        <button type="button" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg p-2.5 text-center">Instructions</button>
      </Link>
    </div>

  )
}

instructions.propTypes = {
  instructions: PropTypes.string,
}

export default instructions;


//In future if we get instructions use this:
{/* <span className="opacity-50 text-black text-xs font-normal font-['Helvetica'] leading-tight">{`  ${numberOfSteps} Steps`}</span> */ }

{/* <div className='flex flex-col gap-2 w-full'>
{instructions.map((stepInfo, stepIndex) => (
  <div key={stepIndex} className='p-2.5 bg-white rounded-md shadow-[rgba(0,0,0,0.25)_0px_0px_5px_0px] justify-start items-start flex flex-col gap-2'>
    <p className="text-black text-sm font-bold font-['Abhaya Libre'] leading-tight">{`Step ${stepIndex+1}`}<span className="text-neutral-400 text-[0.7rem] font-normal font-['Helvetica'] leading-tight">{'/'+numberOfSteps}</span>
    </p>
    <p className="text-black text-sm font-normal font-['Helvetica'] leading-tight">{stepInfo}</p>
    // <ul className='list-disc'>
    //   {stepInfo.steps.map((step, subStepIndex) => (<li key={subStepIndex} className="text-black text-sm font-normal font-['Helvetica'] leading-tight">{step}</li>))}
    // </ul> 
  </div>
))}
</div> 
*/}