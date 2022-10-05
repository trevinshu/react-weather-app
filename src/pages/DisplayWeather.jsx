import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, Outlet, useLocation } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import WeatherItemsDay from '../components/WeatherItemsDay';

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

  const displayWeather = async (locKey) => {
    const data = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=${apiKey}&details=true&metric=true`);
    const result = await data.json();
    setDisplayedWeather(result);
  };

  //Code to display weather

  // {displayedWeather && (
  //   <>
  //     <img src={`assets/icons/${displayedWeather.DailyForecasts[0].Day.Icon}-s.png`} alt="" />
  //     <p>{displayedWeather.DailyForecasts[0].Date}</p>
  //   </>
  // )}

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      displayWeather(key);
      toast.success(`Weather for ${city}`, { position: 'top-center', hideProgressBar: true, toastId: customId });
      setLoading(false);
    }, 2000);
  }, []);

  console.log(displayedWeather);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center text-center h-full">
          <BeatLoader color="#374151" margin={0} size={30} />
        </div>
      ) : (
        <div className="my-10">
          <h2 className="text-4xl text-center uppercase tracking-widest pb-5">{city}</h2>
          <div className="flex justify-center items-center gap-2 mb-5">
            <button
              className={activeTab === 'day' ? 'active [&.active]:bg-gray-700 p-2 rounded text-white w-1/4 uppercase tracking-widest' : 'uppercase tracking-widest w-1/4'}
              onClick={() => setActiveTab('day')}
            >
              Day
            </button>
            <button
              className={activeTab === 'night' ? 'active  [&.active]:bg-gray-700 p-2 rounded text-white w-1/4 uppercase tracking-widest' : 'uppercase tracking-widest w-1/4'}
              onClick={() => setActiveTab('night')}
            >
              Night
            </button>
          </div>
          {activeTab === 'day' && (
            <div className="grid grid-cols-1 mx-4 my-10 gap-6 xl:grid-cols-2">
              {displayedWeather?.DailyForecasts.map((weather, index) => {
                return <WeatherItemsDay weather={weather} key={index} />;
              })}
            </div>
          )}
          {activeTab === 'night' && (
            <div>
              <h2>Night Mode</h2>
              <img src={`assets/icons/${displayedWeather?.DailyForecasts[0]?.Night?.Icon}-s.png`} alt="" />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DisplayWeather;
