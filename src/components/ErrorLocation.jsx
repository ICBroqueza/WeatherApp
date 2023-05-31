import { MdOutlineWrongLocation } from 'react-icons/md';


const ErrorLocation = ({errorMessage}) => {
  return (
    <div role='status' className='flex items-center animate-pulse'>
    <div className='flex flex-col items-center justify-center h-[475px] w-full rounded-2xl shadow-sm mx-5 mt-5 p-5  bg-[#212124] text-white'>
      <MdOutlineWrongLocation size={140} />
      <div className='text-center mt-5'>
        <p>{errorMessage}</p>
        <p>Please enter a valid location...</p>
      </div>
    </div>
  </div>
  )
}

export default ErrorLocation