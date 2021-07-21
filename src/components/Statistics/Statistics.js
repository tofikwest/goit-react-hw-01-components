import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    percentage: PropTypes.number,
    label: PropTypes.string,
  }).isRequired,
};
export default Statistics;
