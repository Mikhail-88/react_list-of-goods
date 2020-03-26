import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

export const Select = ({ hendleSelect, numbers, length }) => {
  const values = [...Array(numbers).keys()];

  return (
    <select className="select" onChange={hendleSelect} value={length}>
      <option disabled="disabled">MinLength</option>
      {values.map((item, index) => (
        <option key={item} value={index + 1}>{index + 1}</option>
      ))}
    </select>
  );
};

Select.propTypes = {
  hendleSelect: PropTypes.func.isRequired,
  numbers: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
