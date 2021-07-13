import React, { Component } from 'react';
import './homeStyle.scss';
import data from "../../services/data";
import Slider from '../../components/Slider/slider'


const {  } = data;




class Home extends Component {
    constructor() {
        super();
        this.state = {
          
        };
      }

      

  


  render() {


    return (
        <div className="Home">
          <Slider/>
        </div>
    );
  }
}

export default Home;