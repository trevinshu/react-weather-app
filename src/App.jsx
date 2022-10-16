import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const Home = React.lazy(() => import('./pages/Home'));
const SearchResult = React.lazy(() => import('./pages/SearchResult'));
const DisplayWeather = React.lazy(() => import('./pages/DisplayWeather'));
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs/';
import { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import Spinner from './components/Spinner';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  //Call from local Storage
  useEffect(() => {
    const storedPreference = localStorage.getItem('prefersDarkMode');
    try {
      if (storedPreference) {
        setDarkMode(JSON.parse(storedPreference));
      } else {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDarkMode);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  //Set to Local Storage
  useEffect(() => {
    try {
      if (darkMode) {
        localStorage.setItem('prefersDarkMode', 'true');
        document.body.classList.add('dark');
      } else {
        localStorage.setItem('prefersDarkMode', 'false');
        document.body.classList.remove('dark');
      }
    } catch (error) {
      console.log(error);
    }
  }, [darkMode]);
  return (
    <AppProvider>
      <div className={darkMode ? 'flex flex-col min-h-screen bg-gray-800' : 'bg-neutral-50 flex flex-col min-h-screen'}>
        <Header>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            type="button"
          >
            {darkMode ? <BsFillSunFill className="fill-neutral-100 text-2xl" /> : <BsFillMoonFill className="fill-gray-700 text-2xl" />}
          </button>
        </Header>
        <SearchForm />
        <Routes>
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Spinner />}>
                <ErrorPage />
              </React.Suspense>
            }
          />
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Spinner />}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="search/:result"
            element={
              <React.Suspense fallback={<Spinner />}>
                <SearchResult />
              </React.Suspense>
            }
          />
          <Route
            path="display-weather"
            element={
              <React.Suspense fallback={<Spinner />}>
                <DisplayWeather />
              </React.Suspense>
            }
          />
        </Routes>
        <ToastContainer theme={darkMode ? 'dark' : 'light'} />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
