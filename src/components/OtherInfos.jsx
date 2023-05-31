import React from 'react';

const OtherInfos = ({apiData, forecast, isDay}) => {
  console.log(forecast)

  const shortDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  const airStatus = [
    { name: 'Wind Direction', value: apiData?.current?.wind_dir, sign: '' },
    { name: 'Wind Degree', value: apiData?.current?.wind_degree, sign: '' },
    { name: 'Gust', value: apiData?.current?.gust_mph, sign: 'MPH' },
  ];

  return (
        <div className='hidden md:flex flex-col justify-between '>
            {/* Air Status*/}
            <div>
              <h3 className='text-xl font-semibold mb-2'>Air Status:</h3>
              <div className={`${isDay ? 'bg-[#eaecef]' : 'bg-[#212124] text-white'} p-5 rounded-xl`}>
                {airStatus.map((a, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center mb-2 last:mb-0'
                  >
                    <div className='flex items-center'>
                      <h3 className='text-lg font-medium'>{a.name}</h3>
                    </div>
                    <p>
                      {a.value} {a.sign}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Daily Forecast */}
            <div className='mt-5'>
              <h3 className='text-xl font-semibold mb-2'>Daily Forecast:</h3>
              <div className={`${isDay ? 'bg-[#eaecef]' : 'bg-[#212124] text-white'}  flex justify-between gap-2  p-5 rounded-xl`}>
                {forecast?.map((f) => (
                  <div key={f?.date} className=' flex flex-col'>
                    <h4 className=' text-center'>
                      {shortDays[new Date(f?.date_epoch * 1000).getDay()]}
                    </h4>
                    <img
                      src={f?.day?.condition?.icon}
                      alt='...'
                      className='border-t-2 object-cover mt-2 pt-2 mb-3'
                    />
                    <div className='flex flex-col items-center'>
                      <h2 className='text-3xl relative'>
                        {f?.day?.avgtemp_c.toFixed(0)}
                        <span className='text-xl absolute'>°</span>
                      </h2>
                    </div>
                  </div>
                ))}
                                <div className=' flex flex-col'>
                    <h4 className=' text-center'>
                      Sat
                    </h4>
                    <img
                      src=
                      "//cdn.weatherapi.com/weather/64x64/day/302.png"
                      alt='...'
                      className='border-t-2 object-cover mt-2 pt-2 mb-3'
                    />
                    <div className='flex flex-col items-center'>
                      <h2 className='text-3xl relative'>
                        30
                        <span className='text-xl absolute'>°</span>
                      </h2>
                    </div>
                  </div>
                                <div className=' flex flex-col'>
                    <h4 className=' text-center'>
                      Sun
                    </h4>
                    <img
                      src=
                      "//cdn.weatherapi.com/weather/64x64/day/302.png"
                      alt='...'
                      className='border-t-2 object-cover mt-2 pt-2 mb-3'
                    />
                    <div className='flex flex-col items-center'>
                      <h2 className='text-3xl relative'>
                        30
                        <span className='text-xl absolute'>°</span>
                      </h2>
                    </div>
                  </div>
              </div>
            </div>
          </div> 
  );
};

export default OtherInfos;
