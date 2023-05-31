import ErrorLocation from './ErrorLocation';
import OtherInfos from './OtherInfos';
import {WiDaySunny} from 'react-icons/wi'
import {MdOutlineNightlight} from 'react-icons/md'

const MainWeather = ({ apiData, forecast, errorLocation, errorMessage, isDay }) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const date = new Date();
  const dayNow = days[date.getDay()];
  const [month, day, year] = [
    date.toLocaleString('default', { month: 'long' }),
    date.getDate(),
    date.getFullYear(),
  ];

  const mainStatus = [
    { name: 'Cloudiness', value: apiData?.current?.cloud, sign: '%' },
    { name: 'Humidity', value: apiData?.current?.humidity, sign: '%' },
    { name: 'Vision', value: apiData?.current?.vis_km, sign: 'KM' },
    { name: 'UV', value: apiData?.current?.uv, sign: 'UV' },
  ];

  return (
    <>
      <div className={`${errorLocation ? 'hidden' : 'flex'} items-center`}>
        <div className={`${isDay ? 'bg-white outline' : 'bg-[#161618] text-white'}  h-[500px] md:h-auto w-full  rounded-2xl shadow-lg mx-5 ml-5 mt-5 p-2 md:p-5 grid grid-cols-2 `}>
          {/* Main Info */}
          <div className='flex flex-col justify-between  col-span-2 md:col-span-1 p-5'>
            <div className='flex items-center justify-between'>
              <div className='leading-5 mb-5'>
                <h3 className='font-semibold text-4xl'>
                  {apiData?.location?.name},
                </h3>
                <p>{apiData?.location?.country}</p>
              </div>

                {isDay ? <div className='p-2 rounded-full bg-[#eaecef]'> <WiDaySunny size={35}/> </div> : 
                <div className='p-2 rounded-full bg-[#212124] text-white'> <MdOutlineNightlight size={35}/></div>}
            </div>

            <div className='flex justify-between items-center mx-2 '>
              <img
                src={apiData?.current?.condition?.icon}
                alt='...'
                className='object-contain h-20'
              />
              <h3 className='text-8xl'>
                {apiData?.current?.temp_c}
                <span className='text-4xl md:text-2xl absolute'>°</span>
              </h3>
            </div>

            <p className='text-lg md:text-xl border-b-2'>
              {apiData?.current?.condition?.text}
            </p>

            <div>
              <div className=' rounded-xl'>
                {mainStatus.map((m, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center mb-2'
                  >
                    <div className='flex items-center'>
                      <h3 className='text-base font-semibold'>{m.name}</h3>
                    </div>
                    <p>
                      {m.value} {m.sign}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other Infos */}
          <OtherInfos apiData={apiData} forecast={forecast} isDay={isDay}/>

        </div>
      </div>
      {errorLocation && <ErrorLocation errorMessage={errorMessage}/>}
    </>
  );
};

export default MainWeather;
