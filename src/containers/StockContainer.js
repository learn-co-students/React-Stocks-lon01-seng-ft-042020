import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.stocks.map((stock, index) =>
      <Stock
        key={index}
        id={stock.id}
        ticker={stock.ticker}
        type={stock.type}
        price={stock.price}
      />
    )
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      //render the list of stocks here
      </div>
    );
  }

}

export default StockContainer;
