import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';
import { Buttons } from '../buttons/Buttons';
import { Goods } from '../goods/Goods';
import { Select } from '../select/Select';

export class GoodsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: this.props.goods,
      isStart: false,
      resetGoods: [...this.props.goods],
      length: 1,
    };
  }

  hendleStart = () => {
    this.setState({
      isStart: true,
    });
  }

  hendleReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  hendleSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  hendleSortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  hendleReset = () => {
    this.setState(prevState => ({
      goods: prevState.resetGoods,
      length: 1,
    }));
  }

  hendleSelect = ({ target }) => {
    this.setState(prevState => ({
      length: +target.value,
    }));
  }

  render() {
    const { goods, isStart, resetGoods, length } = this.state;
    const filterGoods = goods.filter(item => item.length >= length);

    return !isStart ? (
      <button type="button" className="btn__start" onClick={this.hendleStart}>
        Start
      </button>
    ) : (
      <div className="wrapper">
        <Buttons
          hendleReverse={this.hendleReverse}
          hendleSortByLength={this.hendleSortByLength}
          hendleSortByAlphabet={this.hendleSortByAlphabet}
          hendleReset={this.hendleReset}
        />
        <Select
          hendleSelect={this.hendleSelect}
          numbers={resetGoods.length}
          length={length}
        />
        <Goods
          goods={filterGoods}
        />
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
