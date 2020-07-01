import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [], 
    sorted: null, 
    filter: null, 
  }

  componentDidMount() {
    fetch(`http://localhost:3000/stocks`)
    .then(resp => resp.json())
    .then(data => this.setState({ stocks: data }))
    .catch(error => console.log(error.message))
  }

  //add stock 
  addToPortfolio = (id) => {
    this.state.portfolio.find(stockId => stockId === id)
    ? null
    : this.setState({
      portfolio: [...this.state.portfolio, id]
    })
  }

  //remove stock
  removeStock = (id) => {
    this.setState({
      portfolio: this.state.portfolio.filter(stockId => stockId !== id)
    })
  }

  // change sort
  changeSort = (e) => {
    this.setState({
      sorted: e.target.value
    })
  }

  // change filter
  changeFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }


  sortStocksBy = () => {

    let filteredStocks = [...this.state.stocks]

    if (this.state.filter !==null) {
      filteredStocks = filteredStocks.filter(stock => stock.type === this.state.filter)
    }

    switch(this.state.sorted) {
      case "Alphabetically":
        return filteredStocks.sort((a,b) => (a.name > b.name) ? 1 : -1)
      case "Price": 
        return filteredStocks.sort((a,b) => (a.price > b.price) ? 1 : -1)
      default:
        return filteredStocks
    }
  }


  render() {

    let portfolioStocks = this.state.portfolio.map(id => this.state.stocks.find(stock => stock.id === id))
    let displayStocks = this.sortStocksBy()

    return (
      <div>
        <SearchBar
        sorted={this.state.sorted}
        changeSort={this.changeSort}
        changeFilter={this.changeFilter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
              // stocks={this.state.stocks}
              stocks={displayStocks}
              addToPortfolio={this.addToPortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
              // stocks={this.state.portfolio}
              stocks={portfolioStocks}
              removeStock={this.removeStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
