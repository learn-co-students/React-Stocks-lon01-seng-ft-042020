import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  renderMyStockCards = (props) => {
    return props.myStocks.map((myStock) => (
      <Stock
        mine={true}
        stock={myStock}
        deleteMyStock={this.props.deleteMyStock}
      />
    ));
  };
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          //render your portfolio stocks here
          this.renderMyStockCards(this.props)
        }
      </div>
    );
  }
}

export default PortfolioContainer;
