import React from "react";

const Stock = (props) => {
  function handleClick() {
    props.mine
      ? props.deleteMyStock(props.stock)
      : props.addMyStock(props.stock);
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">
            {
              //Company Name
              props.stock.name
            }
          </h5>
          <p className="card-text">{
            //ticker: stock price
            `${props.stock.ticker}: ${props.stock.price}`
          }</p>
        </div>
      </div>
    </div>
  );
};

export default Stock;

// class Stock extends React.Component {

//   handleClick = () => {
//     console.log("gang");
//   };

//   render() {
//     return (
//       <div>
//         <div className="card">
//           <div className="card-body" onClick={this.handleClick}>
//             <h5 className="card-title">
//               {
//                 //Company Name
//                 props.stock.name
//               }
//             </h5>
//             <p className="card-text">{
//               //ticker: stock price
//               `${props.stock.ticker}: ${props.stock.price}`
//             }</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
