import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { useCallback } from 'react';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
