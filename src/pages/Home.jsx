import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

function Home() {
  return (
    <div>
      <SearchForm />
      <Outlet />
    </div>
  );
}

export default Home;
