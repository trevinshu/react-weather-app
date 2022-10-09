import React from 'react';

function Home() {
  return (
    <div className="flex items-center justify-center flex-col m-auto">
      <h1 className="text-center text-2xl uppercase tracking-widest px-2  xl:text-4xl dark:text-slate-100">Welcome To My Weather App!</h1>
      <p className="text-gray-500 text-center pt-2 xl:text-2xl dark:text-gray-400">Enter a location (Ex. Tokyo) to get started.</p>
    </div>
  );
}

export default Home;
