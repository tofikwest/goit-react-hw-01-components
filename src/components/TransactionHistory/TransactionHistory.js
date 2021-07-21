import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id}>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    amount: PropTypes.number,
    type: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};
export default TransactionHistory;
