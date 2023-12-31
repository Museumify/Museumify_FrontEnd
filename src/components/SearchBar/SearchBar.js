import { useState,useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Toggle } from '../SearchBar/Toggle';
import Home from '../home/Home';
import './SearchBar.css';
import { ThemeContext } from '../../App';

export const SearchBar = () => {
  const [input, setInput] = useState('');
  const [searchUrl, setResults] = useState(null);
  const [isLabelToggled, setIsLabelToggled] = useState(false);

  const logState = (state) => {
    // console.log('Toggled:', state);
    setIsLabelToggled(state);
  };

  const fetchData = async (value) => {
    var query;

    if (isLabelToggled === false) {
      query = 'artists';
    } else if (isLabelToggled === true) {
      query = 'culture';
    }
    var searchUrl = null;
    if (value === null || value === '') {
      searchUrl = null;
    } else {
      searchUrl = `${process.env.REACT_APP_SERVER_URL}/?${query}=${value}`;
    }
    // console.log('result selected', searchUrl);

    setResults(searchUrl);

    // console.log('the url from search bar', searchUrl);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={{ theme }}>
    <div>
      <div className="search-bar-container">
        <div className="toggle-container">
          <Toggle toggled={isLabelToggled} onClick={logState} />
        </div>
        <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            placeholder={
              isLabelToggled === false
                ? 'Search by artist name'
                : 'Search by place'
            }
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            className={`search-input ${theme === 'dark' ? 'dark' : 'light'}`}
          />
        </div>
      </div>
      <Home searchUrl={searchUrl} />
    </div>
    </ThemeContext.Provider>
  );
};
