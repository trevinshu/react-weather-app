import React from 'react';
import { Link } from 'react-router-dom';

function LocationItems({ weather, index }) {
  return (
    <div key={index} className="shadow-md p-4 flex flex-col items-center gap-3 rounded-md md:items-start dark:bg-gray-700">
      <p className="tracking-wider md:text-lg dark:text-neutral-100">
        <span className="font-bold dark:text-neutral-100">Location: </span> {weather.LocalizedName}
      </p>
      <p className="tracking-wider md:text-xl dark:text-neutral-100">
        <span className="font-bold text-lg md:text-xl">State: </span>
        {weather.AdministrativeArea.LocalizedName}
      </p>
      <p className="tracking-wider md:text-xl dark:text-neutral-100">
        <span className="font-bold text-lg md:text-xl">Country: </span>
        {weather.Country.LocalizedName}
      </p>
      <Link className="bg-gray-800 w-full rounded-md p-2 text-neutral-100 uppercase tracking-widest hover:bg-gray-600 text-center md:text-xl" to={`/display-weather`} state={{ weather: weather }}>
        View Weather
      </Link>
    </div>
  );
}

export default LocationItems;
