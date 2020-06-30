import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  renderStockCards = (props) => {
    return props.stocks.map((stock) => (
      <Stock mine={false} stock={stock} addMyStock={this.props.addMyStock} />
    ));
  };

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.renderStockCards(this.props)
        }
      </div>
    );
  }
}

export default StockContainer;
