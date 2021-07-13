import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navs from './components/Navs';
import Home from './pages/Home/Home';
import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navs/>
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
