import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <h1 className="text-center text-2xl font-bold uppercase tracking-widest mb-5">404 - Invalid Route!</h1>
      <Link className="bg-gray-800 w-full rounded-md p-2 text-neutral-100 uppercase tracking-widest hover:bg-gray-600 text-center md:text-xl" to={`/`}>
        Go Home
      </Link>
    </div>
  );
}

export default ErrorPage;
