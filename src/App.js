import React from 'react';
import './App.css';
import { GoodsList } from './components/goodsList/GoodsList';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const App = () => (
  <div className="App">
    <h1>List of Goods</h1>
    <GoodsList goods={goodsFromServer} />
  </div>
);

export default App;
