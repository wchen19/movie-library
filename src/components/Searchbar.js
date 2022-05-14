import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Searchbar.css';

function Searchbar({ searchMovies }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='searchbar'>
      <input
        placeholder='Search movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIcon
        onClick={() => {
          searchMovies(searchTerm);
        }}
      />
    </div>
  );
}

export default Searchbar;
