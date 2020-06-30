import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(props){
    super()
    this.state = {
      allStocks:[],
      ownedStocks:[],
      currentSort:"none",
      currentFilter:"All",
    }
  }

  buyStock = (boughtStock)=>{
    const currentStocks = this.state.ownedStocks
    if (!currentStocks.some(stock => stock.name === boughtStock.name )){
      this.setState(
        {ownedStocks: [...currentStocks, boughtStock]}
      )
    }
  }

  sellStock= (soldStock)=>{
    const ownedStocks = this.state.ownedStocks
    const newStocks = ownedStocks.filter(stock => stock.name !== soldStock.name)
    this.setState(
      {ownedStocks: [...newStocks]}
    )
  }

  componentDidMount = ()=>{
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(data =>{
        this.setState({
          allStocks: data
        })
      })
  }

  setSort = (event) =>{
    let newSort = event.target.value
    this.setState({
      currentSort:newSort
    })
  }

  setFilter = (event)=>{
    let newFilter = event.target.value
    this.setState({
      currentFilter:newFilter
    })
  }

  filterAndSort = (stocks) =>{
    const {currentSort, currentFilter} = this.state
    let result = [...stocks]
    if (currentFilter !== "All"){
      result = result.filter(stock=>stock.type === currentFilter)
    }

    if (currentSort !== "none"){
      result.sort((a,b) => a[currentSort] > b[currentSort] ? 1: -1)
    }

    return result
  }



  render() {

    const {allStocks, ownedStocks} = this.state

    return (
      <div>
        <SearchBar 
        setSort={this.setSort} 
        currentSort={this.state.currentSort} 
        setFilter={this.setFilter}        
        currentFilter={this.state.currentFilter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filterAndSort(allStocks)} stockAction={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.filterAndSort(ownedStocks)} stockAction={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }




}

export default MainContainer;
