import React from 'react';
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from '../modules/counter';
import Counter from '../components/Counter';
import { connect } from 'react-redux';

function CounterContainer({ number, increaseAsync, decreaseAsync }) {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
}

export default connect(
  (state) => ({
    number: state.counter,
  }),
  { increaseAsync, decreaseAsync },
)(CounterContainer);
