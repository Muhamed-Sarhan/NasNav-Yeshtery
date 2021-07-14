import React, { Component } from 'react';
import './homeStyle.scss';
import data from "../../services/data";
import Slider from '../../components/Slider/slider'
import FirstProductSection from '../../components/FirstProductsSection/firstProductSection';


const {  } = data;




class Home extends Component {
    constructor() {
        super();
        this.myRef = React.createRef(null);
      }

      

  


  render() {


    return (
        <div className="Home">
          <Slider/>
          <FirstProductSection myRef={this.myRef}/>
        </div>
    );
  }
}

export default Home;