import React, { Component } from 'react';
import './homeStyle.scss';
import data from "../../services/data";
import Slider from '../../components/Slider/slider'
import FirstProductSection from '../../components/FirstProductsSection/firstProductSection';
import SecondProductsSection from '../../components/SecondProductsSection/secondProductsSection';
import ThirdProductSection from '../../components/ThirdProductsSection/thirdProductSection';
import LoadMoreProducts from '../../components/LoadMoreProducts/loadMoreProducts';
import Offers from '../../components/OffersSection/offers';

const { products, category, offers } = data;
class Home extends Component {
    state = {
          products,
          category,
          offers,
          gender: "",
          filteredData: products,
          filteredDataOnSale: products,
          isActive: false,
        };
      
        filterFirstSection = (e) => {
          let genderValue = e.target.value;
          switch (genderValue) {
            case "men":
              this.setState({
                gender: genderValue,
                filteredData: products.filter((menP) => {
                  return menP.gender === "Men";
                }),
              });
              break;
            case "women":
              this.setState({
                gender: genderValue,
                filteredData: products.filter((menP) => {
                  return menP.gender === "Women";
                }),
              });
              break;
            default:
              this.setState({
                gender: genderValue,
                filteredData: products,
              });
              break;
          }
        };

        filterThirdSection = (e) => {
          let genderValue = e.target.value;
          switch (genderValue) {
            case "men":
              this.setState({
                gender: genderValue,
                filteredDataOnSale: products.filter((menP) => {
                  return menP.gender === "Men";
                }),
              });
              break;
            case "women":
              this.setState({
                gender: genderValue,
                filteredDataOnSale: products.filter((menP) => {
                  return menP.gender === "Women";
                }),
              });
              break;
            default:
              this.setState({
                gender: genderValue,
                filteredDataOnSale: products,
              });
              break;
          }
        };
      

  


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
          <FirstProductSection filteredData={filteredData} gender={gender} filterFirstSection={this.filterFirstSection}/>
          <SecondProductsSection category={category}/>
          <ThirdProductSection filteredData={filteredDataOnSale} gender={gender} filterThirdSection={this.filterThirdSection}/>
          <Offers offers={offers}/>
          <LoadMoreProducts products={products}/>
        </div>
    );
  }
}

export default Home;