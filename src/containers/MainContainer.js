import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sorted: null,
    filter: null
    }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => this.setState({stocks: data}))
    .catch(error => console.log(error.message));
  }

  // add stock to portfolio
  addToPortfolio = (id) => {
  this.state.portfolio.find(portfolioStockId => portfolioStockId === id) ? null :
      this.setState({
        portfolio: [...this.state.portfolio, id]
      })
  }
  // remove stock from portfolio
  removeStock = (id) => {
    this.setState({
      portfolio: this.state.portfolio.filter(portfolioStockId => portfolioStockId !== id) 
    })
  }
  
changeSort = (e) => {
  this.setState({
    sorted: e.target.value
  })
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  sortStocks = () => {
    let filteredStocks = [...this.state.stocks]
    filteredStocks = filteredStocks.filter(stock => stock.type === this.state.filter)

    switch(this.state.sorted) {
      case "Alphabetically":
        return filteredStocks.sort((a,b) => (a.ticker > b.ticker) ? 1 : -1)
      case "Price": 
        return filteredStocks.sort((a,b) => (a.price > b.price) ? 1 : -1)
      default:
        return filteredStocks
  }
}

// sort stocks by price 
  render() {
    let portfolioStocks = this.state.portfolio.map(id => this.state.stocks.find(stock => stock.id === id))
    let displayStocks = this.sortStocks()

    return (
      <div>
        <SearchBar sorted={this.state.sorted} changeSort={this.changeSort} changeFilter={this.changeFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={displayStocks} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={portfolioStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
