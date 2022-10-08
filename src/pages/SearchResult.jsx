import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationItems from '../components/LocationItems';
import BeatLoader from 'react-spinners/BeatLoader';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

function SearchResult() {
  const [searchedWeather, setSearchedWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const customId = 'custom-id-yes';

  const apiKey = import.meta.env.VITE_API_KEY;

  const searchResult = async (query) => {
    const data = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${query}`);
    const results = await data.json();
    setSearchedWeather(results.slice(0, 5));
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      searchResult(params.result);
      toast.success(`Result for ${params.result.toLowerCase().trim()}`, { position: 'top-center', hideProgressBar: true, toastId: customId });
      setLoading(false);
    }, 2000);
  }, [params.result]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center text-center h-full m-auto">
          <BeatLoader color="#374151" margin={0} size={30} />
        </div>
      ) : (
        <motion.div className="mt-10 px-5 md:px-10 overflow-hidden" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'tween', delay: 0.2 }}>
          {searchedWeather.length > 1 ? (
            <h1 className=" text-2xl mb-5 tracking-widest dark:text-neutral-100 uppercase">
              Search Results For: <span className="font-bold uppercase">{params.result}</span>
            </h1>
          ) : searchedWeather.length === 0 ? (
            <h1 className=" text-2xl capitalize mb-5 tracking-widest dark:text-neutral-100">
              No search Results For: <span className="font-bold">{params.result}</span>
            </h1>
          ) : (
            <h1 className=" text-2xl capitalize mb-5 tracking-widest dark:text-neutral-100">
              Search Result For: <span className="font-bold">{params.result}</span>
            </h1>
          )}

          <div className="grid grid-cols-1 gap-7 mb-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {searchedWeather.map((weather, index) => {
              return <LocationItems weather={weather} key={index} />;
            })}
          </div>
        </motion.div>
      )}
    </>
  );
}

export default SearchResult;
