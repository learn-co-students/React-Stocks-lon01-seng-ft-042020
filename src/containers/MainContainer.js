import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import API from '../API'


class MainContainer extends Component {
  state = {
    stocks : [],
    myStocks : []
  }
// need to add the existing stock
  addMyStock = (newStock) => {
    this.setState({myStocks : [...this.state.myStocks, newStock]})
  }
// need to add the specific stock
  deleteMyStock = (stockToBeDeleted) => {
    this.setState({myStocks : this.state.myStocks.filter( (x) => { return x !== stockToBeDeleted})})
  }
  
  componentDidMount = () => {
    API.fetchStocks()
    .then(resp => this.setState({stocks : resp}))
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addMyStock={this.addMyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks} deleteMyStock={this.deleteMyStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
