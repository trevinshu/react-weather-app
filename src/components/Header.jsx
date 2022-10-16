import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="bg-neutral-50 p-4 flex justify-between items-center shadow-md dark:bg-gray-700">
      <Link className="text-gray-700 text-2xl uppercase tracking-wide dark:text-neutral-100" to={'/'}>
        Weather App
      </Link>
      {props.children}
    </header>
  );
}

export default Header;
