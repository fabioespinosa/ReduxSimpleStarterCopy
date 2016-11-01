import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
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
    YTSearch({key:API_KEY, term: term}, (videos) =>  {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }
  
  
  render(){

    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch.bind(this)}/>
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
