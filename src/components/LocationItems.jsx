import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function LocationItems({ weather, index }) {
  return (
    <div key={index} className="shadow-md p-4 flex flex-col items-center gap-3 md:items-start">
      <p className="tracking-wider md:text-xl">
        <span className="font-bold text-lg md:text-xl">Location: </span> {weather.LocalizedName}
      </p>
      <p className="tracking-wider md:text-xl">
        <span className="font-bold text-lg md:text-xl">State: </span>
        {weather.AdministrativeArea.LocalizedName}
      </p>
      <p className="tracking-wider md:text-xl">
        <span className="font-bold text-lg md:text-xl">Country: </span>
        {weather.Country.LocalizedName}
      </p>
      <Link
        className="bg-gray-600 w-full rounded-md p-2 text-white uppercase tracking-widest hover:bg-gray-700 text-center md:text-xl"
        to={`/display-weather`}
        state={{ latitude: weather.GeoPosition.Latitude, longitude: weather.GeoPosition.Longitude, key: weather.Key }}
      >
        View Weather
      </Link>
    </div>
  );
}

export default LocationItems;
