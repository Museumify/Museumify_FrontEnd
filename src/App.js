import './App.css';
import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBarList from './components/navComponent/NavBarList';
import { SearchBar } from './components/SearchBar/SearchBar';
import FavoriteArt from './components/favoriteArt/FavoriteArt';
import LoginButton from './components/Login';
import Footer from './components/Footer/Footer';
import AboutUs from './components/aboutUs/AboutUS';

import Header from './components/Header';
import ProfilePage from './components/screens/Profile';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  //style={{backgroundColor:"#FAF0D7"}}
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <NavBarList />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/favorite" element={<FavoriteArt />} />
          <Route path="/header" element={<Header />} />
          <Route path="/signin" element={<LoginButton />} />
          <Route path="/user-profile" element={<ProfilePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
      <div>
       <Footer/>
     </div>
    </ThemeContext.Provider>
  );
}

export default App;
