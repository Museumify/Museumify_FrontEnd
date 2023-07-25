import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Toggle } from '../SearchBar/Toggle';
import Home from '../home/Home';
import './SearchBar.css';

export const SearchBar = () => {
  const [input, setInput] = useState('');
  const [searchUrl, setSearchUrl] = useState(null);
  const [isLabelToggled, setIsLabelToggled] = useState(false);

  const logState = (state) => {
    // console.log('Toggled:', state);
    setIsLabelToggled(state);
  };

  /// this logic sets the URL that will be sent to Home view
  const setHomeUrl = async (value) => {
    var query;
    // filter logic to get query
    if (isLabelToggled === false) {
      query = 'artists';
    } else if (isLabelToggled === true) {
      query = 'culture';
    }

    //setting url based on query or not
    var searchUrl = null; //no search value
    if (value === null || value === '') {
      searchUrl = null;
    } else {
      // have a query
      searchUrl = `https://openaccess-api.clevelandart.org/api/artworks/?${query}=${value}`;
    }
    console.log('result selected', searchUrl);

    setSearchUrl(searchUrl); // setting the final search url to use state Hook 

    console.log('the url from search bar', searchUrl);
  };

  const handleChange = (value) => {
    setInput(value);
    setHomeUrl(value);
  };

  return (
    <div>
      <div className="search-bar-container">
        <div className="toggle-container">
          <Toggle label="Filter" toggled={isLabelToggled} onClick={logState} />
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
          />
        </div>
      </div>
      <Home searchUrl={searchUrl} />
    </div>
  );
};
