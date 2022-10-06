import React from 'react';

function WeatherItemsDay({ weather, index }) {
  //Date Format
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = weather?.Date;
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);

  return (
    <div className="shadow-md p-4 rounded-md grid gap-4" key={index}>
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={`assets/icons/${weather.Day?.Icon}-s.png`} alt="" />
        <h2 className="text-3xl tracking-widest">
          {Math.floor(weather?.Temperature?.Maximum?.Value)}
          {`\u00B0`}
          {weather?.Temperature?.Maximum?.Unit}
        </h2>
      </div>
      <p className="text-center tracking-widest text-xl">{weather?.Day?.LongPhrase}</p>
      <h3 className="text-center tracking-widest text-lg">{formattedDate}</h3>
      <div className="grid grid-cols-2 gap-4 items-center md:grid-cols-4">
        <div className="shadow-md p-4 rounded-md flex flex-col items-center justify-center gap-2">
          <h4>Feels Like</h4>
          <p className="font-light">
            {Math.floor(weather?.RealFeelTemperature?.Maximum?.Value)} {`\u00B0`}
            {weather?.RealFeelTemperature?.Maximum?.Unit}
          </p>
        </div>
        <div className="shadow-md p-4 rounded-md flex flex-col items-center justify-center gap-2">
          <h4>Wind Speed</h4>
          <p className="font-light">
            {Math.floor(weather.Day?.Wind?.Speed?.Value)}
            &nbsp;
            {weather.Day?.Wind?.Speed?.Unit}
          </p>
        </div>
        <div className="shadow-md p-4 rounded-md flex flex-col items-center justify-center gap-2">
          <h4>Air Quality</h4>
          <p className="font-light">{weather.AirAndPollen[0]?.Category}</p>
        </div>
        <div className="shadow-md p-4 rounded-md flex flex-col items-center justify-center gap-2">
          <h3>UV Index</h3>
          <p className="font-light">{weather?.AirAndPollen[5]?.Category}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherItemsDay;
