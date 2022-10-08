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
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'flex flex-col min-h-screen dark bg-gray-800' : 'bg-neutral-50 flex flex-col min-h-screen'}>
      <Header>
        <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <BsFillSunFill className="fill-neutral-100 text-2xl" /> : <BsFillMoonFill className="fill-gray-700 text-2xl" />}</button>
      </Header>
      <SearchForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search/:result" element={<SearchResult />} />
        <Route path="display-weather" element={<DisplayWeather />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
