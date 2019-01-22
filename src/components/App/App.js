import React, { Component } from 'react';
import './_colors.scss'
import './_App.scss';
import Logo from "../Logo/Logo";
import SearchBar from '../SearchBar/SearchBar'

class App extends Component {
  render() {
    return (
      <div>
          <Logo/>
          <SearchBar/>
      </div>
    );
  }
}

export default App;
