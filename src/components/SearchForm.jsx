import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const searchRecipe = (e) => {
    e.preventDefault();

    try {
      if (text === '') {
        toast.error('Please enter a Location', { position: 'bottom-center' });
      } else {
        navigate('/search/' + text.toLowerCase().trim());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mt-10 px-5 flex flex-col items-center justify-center w-100 gap-3" onSubmit={searchRecipe}>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        className="border-2 border-gray-600 rounded-md w-full p-2 lg:w-2/3 xl:w-1/2 dark:bg-gray-600 dark:text-neutral-100 dark:border-gray-700"
        placeholder="Enter a Location..."
      />
      <button className=" bg-gray-700 w-full rounded-md p-2 text-neutral-100 uppercase tracking-wide hover:bg-gray-600 lg:w-2/3 xl:w-1/2 md:text-xl" type="button">
        Search Weather
      </button>
    </form>
  );
}

export default SearchForm;
