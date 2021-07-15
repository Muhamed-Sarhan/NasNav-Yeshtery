import React, { Component } from "react";
import FirstProductCart from "../FirstProductCart/firstProductCart";
import DropDown from "../../Icons/DropDown";
import ViewAllBtn from "../ViewAllBtn/viewAllBtn";
import './loadMoreProducts.scss'

export default class LoadMoreProducts extends Component {
  constructor({ products }) {
    super({ products });
    this.state = {
      items: products,
      visible: 8,
      gender: "",
      specialData: products,
    };
    this.loadMore = this.loadMore.bind(this);
  }


  
  filterLoadMoreSection = (e) => {
    let genderValue = e.target.value;
    switch (genderValue) {
      case "men":
        this.setState({
          gender: genderValue,
          items: this.state.specialData.filter((menP) => {
            return menP.gender === "Men";
          }),
        });
        break;
      case "women":
        this.setState({
          gender: genderValue,
          items: this.state.specialData.filter((menP) => {
            return menP.gender === "Women";
          }),
        });
        break;
      default:
        this.setState({
          gender: genderValue,
          items: this.state.specialData,
        });
        break;
    }
  };


  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 4 };
    });
  }

  render() {
    return (
      <div className="feed">
      <div className="load-more-header">
      <div className="load-more-title">
        <h3>Our Special Selection</h3>
        <h5>Premium products recommended just for you.</h5>
      </div>
      <div className="load-more-btn-select">
        <div>
        <div className="select">
        <select value={this.state.gender} onChange={this.filterLoadMoreSection}>
          <option value='all'>All</option>
          <option value='men'>Men</option>
          <option value='women'>Women</option>
        </select>
        <div className="drop-down">
          <DropDown />
        </div>
      </div>
        </div>
        <div>
          <ViewAllBtn />
        </div>
      </div>
    </div>
        <div className="productLoadMore">
          <div className="tiles" aria-live="polite">
            {this.state.items.slice(0, this.state.visible).map((item) => {
              return (
                <div className="tile fade-in" key={item.id}>
                  <FirstProductCart product={item} />
                </div>
              );
            })}
          </div>
          {this.state.visible < this.state.items.length && (
            <button onClick={this.loadMore} type="button" className="load-more">
            Show More
            </button>
          )}
        </div>
      </div>
    );
  }
}
