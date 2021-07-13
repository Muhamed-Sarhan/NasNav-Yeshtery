import React, { Component } from 'react';
import AddidasNav from './components/Navs/AddidasNav';
import GenderNav from './components/Navs/GendersNav';
import YeshteryNav from './components/Navs/YeshteryNav';
import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <YeshteryNav />
        <AddidasNav />
        <GenderNav />
      </div>
    );
  }
}

export default App;
