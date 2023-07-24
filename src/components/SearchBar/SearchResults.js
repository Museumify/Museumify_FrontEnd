import './SearchResults.css';
import { SearchBar } from './SearchBar';

export const SearchResults = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => {
        e.preventDefault();
        alert(`You selected ${result.creators?.[0]?.description}! `);
        <SearchBar result={result} />;
      }}
    >
      {result.creators?.[0]?.description}
      {result.images?.web?.url}
      {result?.wall_description}
      {result?.culture?.[0]}
    </div>
  );
};
