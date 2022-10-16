import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import WeatherItemsDay from '../components/WeatherItemsDay';
import { motion } from 'framer-motion';
import WeatherItemsNight from '../components/WeatherItemsNight';
import Spinner from '../components/Spinner';
import AppContext from '../context/AppContext';

function DisplayWeather() {
  const location = useLocation();
  const { weather } = location.state;

  const key = weather.Key;
  const city = weather.LocalizedName;
  const apiKey = import.meta.env.VITE_API_KEY;
  const customId = 'custom-id-yes';

  const { displayWeather, displayedWeather } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('day');

  const [swapUnit, setUnits] = useState(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}&details=true&metric=true`);
  const [buttonText, setButtonText] = useState('Imperial');

  useEffect(() => {
    setLoading(true);
    try {
      //Timeout to delay display of weather forecast & show loading state
      setTimeout(() => {
        displayWeather(swapUnit);
        toast.success(`Weather For ${city}`, { position: 'top-center', hideProgressBar: true, toastId: customId });
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }, [swapUnit]);

  //Toggle between celsius and fahrenheit
  function changeParams(e) {
    e.preventDefault();

    try {
      if (buttonText === 'Imperial') {
        setUnits(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}&details=true&metric=false`);
        setButtonText('Metric');
      } else {
        setUnits(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}&details=true&metric=true`);
        setButtonText('Imperial');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <motion.div className="mt-10 px-5 md:px-10" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'tween', delay: 0.2 }}>
          <h2 className="text-4xl text-center uppercase tracking-widest pb-5 dark:text-slate-100">{city}</h2>
          <div className="flex justify-between mb-5">
            <div className="flex gap-2 justify-center items-center">
              <button
                className={activeTab === 'day' ? 'active [&.active]:bg-gray-700 p-2 rounded text-white uppercase tracking-widest dark:text-slate-100' : 'uppercase tracking-widest dark:text-slate-100'}
                onClick={() => setActiveTab('day')}
                aria-label="Switch to day forecast"
              >
                Day
              </button>
              <button
                className={
                  activeTab === 'night' ? 'active  [&.active]:bg-gray-700 p-2 rounded text-white uppercase tracking-widest dark:text-slate-100' : 'uppercase tracking-widest dark:text-slate-100'
                }
                onClick={() => setActiveTab('night')}
                aria-label="Switch to night forecast"
              >
                Night
              </button>
            </div>
            <button onClick={changeParams} className="bg-gray-700 p-2 rounded text-white uppercase tracking-widest" aria-label="Switch between Celsius and Fahrenheit">
              {buttonText}
            </button>
          </div>
          {activeTab === 'day' && (
            <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'tween' }}>
              <div className="grid grid-cols-1 my-10 gap-6 xl:grid-cols-2">
                {displayedWeather?.DailyForecasts.map((weather, index) => {
                  return <WeatherItemsDay weather={weather} key={index} />;
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'night' && (
            <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'tween' }}>
              <div className="grid grid-cols-1 my-10 gap-6 xl:grid-cols-2">
                {displayedWeather?.DailyForecasts.map((weather, index) => {
                  return <WeatherItemsNight weather={weather} key={index} />;
                })}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
}

export default DisplayWeather;
