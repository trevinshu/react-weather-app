import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DisplayWeather() {
  const location = useLocation();
  const { weather } = location.state;

  const latitude = weather.GeoPosition.Latitude;
  const longitude = weather.GeoPosition.Longitude;
  const key = weather.Key;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [displayedWeather, setDisplayedWeather] = useState(null);

  const displayWeather = async (locKey) => {
    const data = await fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=${apiKey}`);
    const result = await data.json();
    setDisplayedWeather(result);
  };

  useEffect(() => {
    displayWeather(key);
  }, []);

  console.log(displayedWeather);

  return <div>{displayedWeather && <img src={`assets/icons/${displayedWeather.DailyForecasts[0].Day.Icon}-s.png`} alt="" />}</div>;
}

export default DisplayWeather;
