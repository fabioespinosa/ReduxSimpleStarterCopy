import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAaiFlMeN7vhtZXuisgTL4qccXamWYb38U';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }
  
  videoSearch(term){
    YTSearch({key:API_KEY, term: term}, function(videos) {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }
  
  
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
