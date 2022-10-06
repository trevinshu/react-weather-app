import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, Outlet, useLocation } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import WeatherItemsDay from '../components/WeatherItemsDay';
import { motion } from 'framer-motion';
import WeatherItemsNight from '../components/WeatherItemsNight';

function DisplayWeather() {
  const location = useLocation();
  const { weather } = location.state;

  const latitude = weather.GeoPosition.Latitude;
  const longitude = weather.GeoPosition.Longitude;
  const key = weather.Key;
  const city = weather.LocalizedName;
  const apiKey = import.meta.env.VITE_API_KEY;
  const customId = 'custom-id-yes';

  const [displayedWeather, setDisplayedWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('day');
  const [swapUnit, setUnits] = useState(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}&details=true&metric=true`);
  const [buttonText, setButtonText] = useState('metric');

  let toggle = false;
  function changeParams(e) {
    e.preventDefault();
    toggle = !toggle;

    if (toggle) {
      setButtonText('Metric');
      setUnits(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}&details=true&metric=false`);
    } else {
      setButtonText('Imperial');
      setUnits(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}&details=true&metric=true`);
    }
  }

  const displayWeather = async () => {
    const data = await fetch(swapUnit);
    const result = await data.json();
    setDisplayedWeather(result);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      displayWeather();
      toast.success(`Weather for ${city}`, { position: 'top-center', hideProgressBar: true, toastId: customId });
      setLoading(false);
    }, 2000);
  }, [swapUnit]);

  console.log(displayedWeather);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center text-center h-full">
          <BeatLoader color="#374151" margin={0} size={30} />
        </div>
      ) : (
        <div className="my-10 px-10">
          <h2 className="text-4xl text-center uppercase tracking-widest pb-5">{city}</h2>
          <div className="flex justify-between mb-5">
            <div className="flex gap-2 justify-center items-center">
              <button
                className={activeTab === 'day' ? 'active [&.active]:bg-gray-700 p-2 rounded text-white uppercase tracking-widest' : 'uppercase tracking-widest'}
                onClick={() => setActiveTab('day')}
              >
                Day
              </button>
              <button
                className={activeTab === 'night' ? 'active  [&.active]:bg-gray-700 p-2 rounded text-white  uppercase tracking-widest' : 'uppercase tracking-widest'}
                onClick={() => setActiveTab('night')}
              >
                Night
              </button>
            </div>
            <button onClick={changeParams} className="bg-gray-700 p-2 rounded text-white uppercase tracking-widest" type="button">
              {buttonText}
            </button>
          </div>
          {activeTab === 'day' && (
            <div>
              <motion.div className="grid grid-cols-1 my-10 gap-6 xl:grid-cols-2" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'tween' }}>
                {displayedWeather?.DailyForecasts.map((weather, index) => {
                  return <WeatherItemsDay weather={weather} key={index} />;
                })}
              </motion.div>
            </div>
          )}

          {activeTab === 'night' && (
            <div>
              <motion.div className="grid grid-cols-1 my-10 gap-6 xl:grid-cols-2" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'tween' }}>
                {displayedWeather?.DailyForecasts.map((weather, index) => {
                  return <WeatherItemsNight weather={weather} key={index} />;
                })}
              </motion.div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DisplayWeather;
