import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResult from './pages/SearchResult';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="search/:result" element={<SearchResult />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
