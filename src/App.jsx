import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResult from './pages/SearchResult';
import DisplayWeather from './pages/DisplayWeather';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="search/:result" element={<SearchResult />} />
          <Route path="display-weather" element={<DisplayWeather />} />
        </Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
