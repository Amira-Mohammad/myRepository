import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import VideoSlider from './components/VideoSlider/VideoSlider';
import MoreDetails from './components/MoreDetails/MoreDetails'
import './App.css';

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />

          <Route exact path="/" component={VideoSlider} />
          <Route path="/videoDetails" component={MoreDetails} />
          <Route path="/home" component={VideoSlider} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
