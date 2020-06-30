import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  

  constructor(){
    super()
  }


  renderStocks =()=>{
    if (this.props.stocks){
      return( this.props.stocks.map((stock, idx) => {
        return (
          <Stock 
          details={stock} 
          key={idx}
          action={this.props.stockAction}
          />
          
        )
      })
      )
    }    
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
