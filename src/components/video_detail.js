import React from 'react';


class VideoDetail extends React.Component {
  
  render(){
    if(this.props.video){
      const videoId = this.props.video.id.videoId;
      const url = 'https://www.youtube.com/embed/'+videoId + '?autoplay=1';
      
      return (
        <div className="col-md-8">
          <iframe src={url} ></iframe>
        </div>
      );
    }
    else {
      return (
        <div>ingrese una busqueda</div>
      )
    }

  }
}

export default VideoDetail;
