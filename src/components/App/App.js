import React, { Component } from 'react';
import './App.css';
import MyText from "../MyText/MyText";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My app</h1>
        <MyText text="siemano"/>
      </div>
    );
  }
}

export default App;
