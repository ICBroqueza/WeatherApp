import { MdOutlineSatelliteAlt } from 'react-icons/md';

const Loading = () => {
  return (
    <div role='status' className='flex items-center animate-pulse'>
      <div className='flex flex-col items-center justify-center h-[475px] w-full rounded-2xl shadow-sm mx-5  mt-5 p-5 bg-[#212124] text-white'>
        <div className='flex flex-col items-center gap-4'>
          <MdOutlineSatelliteAlt size={140} />
          <div className='text-center mt-5'>
            <p>Fetching weather, please wait...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
