import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResult from './pages/SearchResult';
import DisplayWeather from './pages/DisplayWeather';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs/';
import { useState, useEffect } from 'react';
import ErrorPage from './pages/ErrorPage';

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
    <div className={darkMode ? 'flex flex-col min-h-screen bg-gray-800' : 'bg-neutral-50 flex flex-col min-h-screen'}>
      <Header>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? <BsFillSunFill className="fill-neutral-100 text-2xl" /> : <BsFillMoonFill className="fill-gray-700 text-2xl" />}
        </button>
      </Header>
      <SearchForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search/:result" element={<SearchResult />} />
        <Route path="display-weather" element={<DisplayWeather />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer theme={darkMode ? 'dark' : 'light'} />
      <Footer />
    </div>
  );
}

export default App;
