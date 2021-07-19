import React from 'react';
import data from '../../data/data';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

const TransactionHistory = () => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {data.transactions.map(({ id, type, amount, currency }) => (
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
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionHistory;
