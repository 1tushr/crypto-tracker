import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Table from './components/Table';
// \Table.jsx // Import the TableRow component

function App() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false ")
      .then((response) => {
        setCoinData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
  <table>
    <thead>
    <tr>
       <th>IMAGE</th>
       <th>NAME</th>
       <th>SYMBOL</th>
       <th>CURRENT PRICE</th>
       <th>TOTAL VOLUME</th>
       <th>PRICE CHANGE</th>
       <th>MARKET CAP</th>
       </tr>
   </thead>
   <tbody>
     {coinData.map(item => (
       <Table key={item.id} data={item} />
     ))}
     </tbody>
   </table>
    </div>
  
   );
}

export default App;
