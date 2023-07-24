import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NavBarList from './components/navCompnent/NavBarList';
import FavoriteArt from './components/favoriteArt/FavoriteArt';
import { createContext, useState } from 'react';

export const ThemeContext= createContext(null);

function App() {
  const [theme,setTheme]=useState("light")
  const toggleTheme=() =>{
    setTheme((curr)=> (curr ==="light"? "dark":"light"))
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>
       <NavBarList/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorite" element={<FavoriteArt/>} />
      </Routes> 
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
