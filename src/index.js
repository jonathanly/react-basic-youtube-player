import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyBa3DDIYkm_ovuhHDrw6a3aUPbEzoExaeI'

const App = () => {
  return <div>
    <SearchBar />
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
