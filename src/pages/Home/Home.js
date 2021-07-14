import React, { Component } from 'react';
import './homeStyle.scss';
import data from "../../services/data";
import Slider from '../../components/Slider/slider'
import FirstProductSection from '../../components/FirstProductsSection/firstProductSection';


const { products, category, offers } = data;




class Home extends Component {
    constructor() {
        super();
        this.myRef = React.createRef(null);
        this.state = {
          products,
          category,
          offers,
          gender: "",
          filteredData: products,
          filteredDataOnSale: products,
          isActive: false,
        };
      }

      

  


  render() {

    const {
      products,
      gender,
      filteredData,
      filteredDataOnSale,
      category,
      offers,
      isActive,
    } = this.state;

    return (
        <div className="Home">
          <Slider/>
          <FirstProductSection filteredData={filteredData}  myRef={this.myRef}/>
        </div>
    );
  }
}

export default Home;