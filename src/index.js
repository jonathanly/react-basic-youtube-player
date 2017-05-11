import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyBa3DDIYkm_ovuhHDrw6a3aUPbEzoExaeI'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'one piece'}, (videos) => {
      this.setState({ videos });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
