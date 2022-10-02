import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function Header() {
  return (
    <header className=" bg-gray-600 h-1/2 p-5 flex justify-between">
      <h1 className=" text-white text-2xl uppercase tracking-wide pl-4">Weather App</h1>
      <button>
        {' '}
        <BsFillMoonStarsFill fill="white" />
      </button>
    </header>
  );
}

export default Header;
