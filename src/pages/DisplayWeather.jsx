import React from 'react';
import { useLocation } from 'react-router-dom';

function DisplayWeather() {
  const location = useLocation();
  const { latitude, longitude, key } = location.state;
  return (
    <div>
      DisplayWeather
      {latitude} and {longitude} and {key}
    </div>
  );
}

export default DisplayWeather;
