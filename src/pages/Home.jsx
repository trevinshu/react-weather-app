import React from 'react';

function Home() {
  // const apiKey = import.meta.env.VITE_API_KEY;
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  // const [getKey, setKey] = useState(null);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLat(position.coords.latitude);
  //     setLng(position.coords.longitude);
  //   });
  // }, []);

  // const fetchKey = async (latitude, longitude) => {
  //   const data = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude}%2C%20${longitude}`);
  //   const res = await data.json();
  //   setKey(res);
  // };

  // useEffect(() => {
  //   fetchKey(lat, lng);
  // }, [lat, lng]);

  // console.log(getKey);

  return (
    <div className="flex items-center justify-center m-auto">
      <h1 className="text-center text-2xl uppercase tracking-widest dark:text-slate-100">Welcome to Weather App!</h1>
    </div>
  );
}

export default Home;
