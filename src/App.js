import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Tablenav from './Components/Tablenav';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header/>
        <Tablenav/>
        <Footer/>
      </div>
    );
  }
}

export default App;
