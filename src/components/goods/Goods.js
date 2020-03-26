import React from 'react';
import PropTypes from 'prop-types';
import './Goods.css';

export const Goods = ({ goods }) => (
  <ul className="goods__list">
    {goods.map(item => <li className="goods__item" key={item}>{item}</li>)}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
