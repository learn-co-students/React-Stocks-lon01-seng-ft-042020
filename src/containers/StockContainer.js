import React from 'react';
import Stock from '../components/Stock'

const StockContainer = props => {

    return (
      <div>
        <h2>Stocks</h2>
        {
        props.stocks.map(stock => <Stock key={stock.id} stock={stock} stockAction={props.addToPortfolio}/>)
        }
      </div>
    );

}

export default StockContainer;
