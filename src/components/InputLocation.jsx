import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

const InputLocation = ({ inputLocation, isDay }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    inputLocation(input);
    setInput('');
  };
  return (
    <>
      <input
        onChange={handleChange}
        type='text'
        placeholder='Input a location...'
        required
        className={`${isDay ? 'bg-white' : 'bg-[#161618] text-white'} outline-none text-sm px-2 w-full`}
      />
      <button onClick={handleClick} className='mr-2'>
        <BsSearch />
      </button>
    </>
  );
};

export default InputLocation;
