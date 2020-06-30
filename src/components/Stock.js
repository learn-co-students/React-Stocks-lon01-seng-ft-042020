import React from 'react'

const Stock = (props) => {
  
  const details = props.details
  return(
  <div>

    <div className="card" onClick={()=>props.action(details)}>
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            details.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            details.price
          }</p>
      </div>
    </div>


  </div>
)};

export default Stock
