import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBarList from './components/navComponent/NavBarList';
import { SearchBar } from './components/SearchBar/SearchBar';
import FavoriteArt from './components/favoriteArt/FavoriteArt';

function App() {
  return (
    <div className="App">
      <NavBarList />
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/favorite" element={<FavoriteArt />} />
      </Routes>
    </div>
  );
}

export default App;
