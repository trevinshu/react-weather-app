import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function SearchResult() {
  const [searchedWeather, setSearchedWeather] = useState([]);
  const params = useParams();

  const searchResult = async (query) => {
    const data = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=rmFIiitZBSNgbQnlbsz0qADEb6N4FiXd&q=${query}`);
    const results = await data.json();
    setSearchedWeather(results.slice(0, 5));
  };

  useEffect(() => {
    searchResult(params.result);
  }, [params.result]);

  console.log(searchedWeather);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 px-5 md:px-10">
      <h1 className=" text-2xl capitalize">Search Result For: {params.result}</h1>
      <div className="grid grid-cols-2 gap-5 mt-5 md:grid-cols-4">
        {searchedWeather.map((weather, index) => {
          return (
            <div key={index} className="shadow-sm p-4 border-red-600 border-4 flex flex-col items-center gap-2">
              <h2>
                <span className="font-bold text-lg">Location: </span> {weather.LocalizedName}
              </h2>
              <p>
                <span className="font-bold text-lg">State: </span>
                {weather.AdministrativeArea.LocalizedName}
              </p>
              <p>
                <span className="font-bold text-lg">Country: </span>
                {weather.Country.LocalizedName}
              </p>
              <button className="bg-gray-600 w-full rounded-md p-2 text-white uppercase tracking-wide hover:bg-gray-700">Get Weather</button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SearchResult;
