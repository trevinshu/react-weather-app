import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationItems from '../components/LocationItems';

function SearchResult() {
  const [searchedWeather, setSearchedWeather] = useState([]);
  const params = useParams();

  const apiKey = import.meta.env.VITE_API_KEY;

  const searchResult = async (query) => {
    const data = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${query}`);
    const results = await data.json();
    setSearchedWeather(results.slice(0, 5));
  };

  useEffect(() => {
    searchResult(params.result);
  }, [params.result]);

  console.log(searchedWeather);

  return (
    <div className="mt-10 px-5 md:px-10">
      {searchedWeather.length > 1 ? (
        <h1 className=" text-2xl capitalize mb-5 tracking-widest ">
          Search Results For: <span className="font-bold">{params.result}</span>
        </h1>
      ) : searchedWeather.length === 0 ? (
        <h1 className=" text-2xl capitalize mb-5 tracking-widest ">
          No search Results For: <span className="font-bold">{params.result}</span>
        </h1>
      ) : (
        <h1 className=" text-2xl capitalize mb-5 tracking-widest ">
          Search Result For: <span className="font-bold">{params.result}</span>
        </h1>
      )}

      <div className="grid grid-cols-2 gap-7 lg:grid-cols-3 2xl:grid-cols-4">
        {searchedWeather.map((weather, index) => {
          return <LocationItems weather={weather} key={index} />;
        })}
      </div>
    </div>
  );
}

export default SearchResult;
