import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NavBarList from './components/navCompnent/NavBarList';
import FavoriteArt from './components/favoriteArt/FavoriteArt';
function App() {
  return (
    <div className="App">
      <NavBarList/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorite" element={<FavoriteArt/>} />
      </Routes>
      
    </div>
  );
}

export default App;
