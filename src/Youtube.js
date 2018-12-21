import React, { Component } from 'react'
const API = 'AIzaSyCWD0i-wrHn3C7BKM_jEvN2uHmV9R-o8mA';
const channelID = 'UCzBDmYcmynHX7mELvD0sWEA';
const result = 10;
var TimeURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
class Youtube extends Component {   
  render() {
      console.log(TimeURL);
    return (
      <div className="youtube">
        <button>Get Youtube videos</button>
        <h1>Hello youtube</h1>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wAUK9hVgmNI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Youtube
