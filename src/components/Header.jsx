import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function Header() {
  return (
    <header className="bg-white p-4 flex justify-between items-center shadow-md">
      <Link className="text-gray-700 text-2xl uppercase tracking-wide pl-4" to={'/'}>
        Weather App
      </Link>
      <BsFillMoonStarsFill fill="rgb(55 65 81)" />
    </header>
  );
}

export default Header;
