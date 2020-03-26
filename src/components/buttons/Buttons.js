import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

export const Buttons = (
  { hendleReverse, hendleSortByLength, hendleSortByAlphabet, hendleReset },
) => (
  <>
    <button
      type="button"
      className="btn"
      onClick={hendleReverse}
    >
    Reverse
    </button>
    <button
      type="button"
      className="btn"
      onClick={hendleSortByLength}
    >
    SortByLength
    </button>
    <button
      type="button"
      className="btn"
      onClick={hendleSortByAlphabet}
    >
    SortByAlphabet
    </button>
    <button
      type="button"
      className="btn"
      onClick={hendleReset}
    >
    Reset
    </button>
  </>
);

Buttons.propTypes = {
  hendleReverse: PropTypes.func.isRequired,
  hendleSortByLength: PropTypes.func.isRequired,
  hendleSortByAlphabet: PropTypes.func.isRequired,
  hendleReset: PropTypes.func.isRequired,
};
