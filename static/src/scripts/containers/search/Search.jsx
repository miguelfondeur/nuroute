// Libs
import React from 'react';

// Components
import searchResults from '../../mochs/searchResults.json';

// CSS
import './search.css';

const Search = () => (
  <pre><code>
    {JSON.stringify(searchResults, null, 4)}
  </code></pre>
);

module.exports = Search;
