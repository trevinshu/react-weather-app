import { createContext, useState } from 'react';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [searchedWeather, setSearchedWeather] = useState([]);
  const [displayedWeather, setDisplayedWeather] = useState(null);

  const searchResult = async (apiKey, query) => {
    try {
      const data = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${query}`);
      const results = await data.json();
      setSearchedWeather(results.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  const displayWeather = async (swapUnit) => {
    const data = await fetch(swapUnit);
    const result = await data.json();
    setDisplayedWeather(result);
  };

  return (
    <AppContext.Provider
      value={{
        searchResult,
        searchedWeather,
        displayWeather,
        displayedWeather,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
