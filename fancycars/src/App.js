import React, { Component } from 'react';
import Header from './Header';
import ListOfCars from './ListOfCars';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ListOfCars/>
      </div>
    );
  }
}

export default App;
