import { useEffect, useState } from 'react';
import InputLocation from './components/InputLocation';
import Loading from './components/Loading';
import MainWeather from './components/MainWeather';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isDay, setIsDay] = useState(false)

  const [location, setLocation] = useState('Manila');
  const [errorLocation, setErrorLocation] = useState(false);

  useEffect(() => {
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=dfa43a5e4ca440af8f831319231705&q=${location}&days=5&aqi=no&alerts=no`;
    setIsLoading(true);
    (async () => {
      try {
        const forecast = await fetch(URL)
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              setErrorLocation(true);
              setErrorMessage(data?.error?.message);
            }

            if (data?.current?.is_day === 1) {
              setIsDay(true)
            }

            setIsLoading(false);
            setApiData(data);
            setForecast(data?.forecast?.forecastday);
          });
      } catch (err) {
        setIsLoading(false);
        setErrorLocation(true);
        setErrorMessage(err);
      }
    })();
  }, [location]);

  const inputLocation = (data) => {
    setLocation(data);
  };

  return (
    <>
      <div className='flex flex-col mx-auto mt-40 md:mt-44 max-w-[900px]'>
        <div className={`${isDay ? 'bg-white outline' : 'bg-[#161618] text-white'} flex justify-between items-center  p-2 rounded-xl shadow-sm mx-5 mt-5 `}>
          <InputLocation inputLocation={inputLocation} isDay={isDay}/>
        </div>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <MainWeather
              apiData={apiData}
              forecast={forecast}
              errorLocation={errorLocation}
              errorMessage={errorMessage}
              isDay={isDay}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
