const stocksURL = "http://localhost:3000/stocks"

function fetchStocks() {
    return fetch(stocksURL)
      .then(function (response) {
        return response.json();
      })
      .catch(function(error) {
        alert("Fetching stocks from db did not work");
        console.log(error.message);
      });
}

export default {fetchStocks}