import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBarList from './components/navComponent/NavBarList';
import { SearchBar } from './components/SearchBar/SearchBar';
import FavoriteArt from './components/favoriteArt/FavoriteArt';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <NavBarList />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/favorite" element={<FavoriteArt />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
