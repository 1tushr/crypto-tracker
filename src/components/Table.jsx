
import React from 'react';

const Table= ({ data }) => {
  const {image, name, symbol, current_price, total_volume,price_change_percentage_24h,market_cap } = data;

  return (
    <tr>
      <td>
        <img src={image} alt={name} width="50" height="50" />
      </td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>${current_price}</td>
      <td>${total_volume}</td>
      <td style={price_change_percentage_24h < 0 ? { color: "red" } : { color: "green" }}>
        {price_change_percentage_24h}%
      </td>
      <td>{market_cap}</td>
    </tr>

  );
};

export default Table;