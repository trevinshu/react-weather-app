import React from 'react';

function WeatherItemsNight({ weather, index }) {
  //Date Format
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = weather?.Date;
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);

  return (
    <div className="shadow-md p-4 rounded-md grid gap-4 dark:bg-gray-700" key={index}>
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={`assets/icons/${weather.Night?.Icon}-s.png`} alt="" />
        <h2 className="text-3xl tracking-widest dark:text-slate-100">
          {Math.floor(weather?.Temperature?.Minimum?.Value)}
          {`\u00B0`}
          {weather?.Temperature?.Minimum?.Unit}
        </h2>
      </div>
      <p className="text-center tracking-widest text-xl dark:text-slate-100">{weather?.Night?.LongPhrase}</p>
      <h3 className="text-center tracking-widest text-lg dark:text-slate-100">{formattedDate}</h3>
      <div className="grid grid-cols-2 gap-4 items-center md:grid-cols-4">
        <div className="shadow-md p-4 rounded-md flex flex-col items-center justify-center gap-2">
          <h4 className="dark:text-slate-100">Feels Like</h4>
          <p className="font-light dark:text-slate-100">
            {Math.floor(weather?.RealFeelTemperature?.Minimum?.Value)} {`\u00B0`}
            {weather?.RealFeelTemperature?.Minimum?.Unit}
          </p>
        </div>
        <div className="shadow-md p-4 rounded-md flex flex-col items-center justify-center gap-2">
          <h4 className="dark:text-slate-100">Wind Speed</h4>
          <p className="font-light dark:text-slate-100">
            {Math.floor(weather.Night?.Wind?.Speed?.Value)}
            &nbsp;
            {weather.Night?.Wind?.Speed?.Unit}
          </p>
        </div>
        <div className="shadow-md p-4 rounded-md flex flex-col items-center justify-center gap-2">
          <h4 className="dark:text-slate-100">Air Quality</h4>
          <p className="font-light dark:text-slate-100">{weather.AirAndPollen[0]?.Category}</p>
        </div>
        <div className="shadow-md p-4 rounded-md flex flex-col items-center justify-center gap-2">
          <h4 className="dark:text-slate-100">UV Index</h4>
          <p className="font-light dark:text-slate-100">{weather?.AirAndPollen[5]?.Category}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherItemsNight;
