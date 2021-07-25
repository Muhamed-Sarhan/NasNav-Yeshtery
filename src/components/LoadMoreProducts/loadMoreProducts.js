import React, { Component } from "react";
import FirstProductCart from "../FirstProductCart/firstProductCart";
import DropDown from "../../Icons/DropDown";
import DropDownMobile from "../../Icons/DropDownMobile";
import { Link } from "react-router-dom";
import "./loadMoreProducts.scss";
import Scroller from "../FirstScroller/firstScroller";

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
      <div className="l-section">
        <div className="l-header">
          <div className="l-title">
            <h3>Our Special Selection</h3>
            <h5>Premium products recommended just for you.</h5>
          </div>
          <div className="l-btn-select">
            <div>
              <div className="l-select">
                <select
                  value={this.state.gender}
                  onChange={this.filterLoadMoreSection}
                >
                  <option value="all">All</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </select>
                <div className="l-drop-down">
                  <DropDown />
                </div>
                <div className="f-drop-down-m">
                  <DropDownMobile />
                </div>
              </div>
            </div>
            <div>
              <Link className="l-view-all-btn">
                <strong>View All</strong>
              </Link>
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

        <div className="l-scroller-mobile">
          <Scroller filteredData={this.state.items} />
        </div>

        <div>
          <Link className="l-view-all-btn-mobile">
            <strong>View All</strong>
          </Link>
        </div>
      </div>
    );
  }
}
