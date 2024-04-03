import React, { useState } from 'react';
import PersonalHelp from './Questions/Personal Help';
import BusinessHelp from './Questions/BusinessHelp';
import TechnicalHelp from './Questions/TechnicalHelp';

const SelectionSlideButton = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="flex justify-between md:w-3/4 lg:w-2/4 xl:w-2/5 w-full bg-gray-200 rounded-full p-1">
      {options.map((option) => (
        <button
          key={option}
          className={`w-1/3 h-10 text-xs sm:text-sm rounded-full ${
            selectedOption === option ? 'bg-white font-bold text-bgcolor' : 'text-gray-700 font-semibold opacity-80'
          } transition duration-300 ease-in-out`}
          onClick={() => handleOptionChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const Slidebuttons = () => {
  const options = ['Personal Help', 'Business Help', 'Technical Help'];
  const [selectedOption, setSelectedOption] = useState('Personal Help');

  const handleSelectionChange = (option) => {
    setSelectedOption(option);
  };



  return (
    <>

    <div className='mb-16'>

  
    <div className="flex flex-col items-center mt-10">
      <SelectionSlideButton options={options} onChange={handleSelectionChange} />
    </div>
    <div className='flex xl:flex-row flex-col items-center justify-evenly'>
   {selectedOption === 'Personal Help' && <PersonalHelp/>}
   {selectedOption === 'Business Help' && <BusinessHelp/>}
   {selectedOption === 'Technical Help' && <TechnicalHelp/>}
    

    <div className='xl:w-1/6 xl:h-60 w-full sm:w-2/5 mt-12 p-6  flex flex-col items-center justify-center px-3 drop-shadow-3xl rounded-lg bg-gray-100 text-center '>
      <h1 className=' xl:font-semibold font-bold text-sm xl:font-serif'>Get customised help with your account and access to the message centre</h1>
      <button className=' mt-6 border-2 hover:text-white hover:bg-bglite border-bglite text-sm font-medium text-bglite px-3 py-[2px] pb-1 rounded-full '>Log In</button>
    </div>
    </div>
    </div>
    </>
    
  );
};

export default Slidebuttons;