import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Import Project Components
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Contact from './Components/Contact';

class App extends Component {
  render () {
    return (
      <Router>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
      </Router>
    );
  }
}

export default App;
