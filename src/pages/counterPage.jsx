import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, setCount } from '../app/counterSlice';
import { Button, Stack } from 'react-bootstrap';


const CounterPage = () => {
    const state = useSelector((store) => store.counterReducer);
    const dispatch = useDispatch();

  return (
    <div>
      <h1>{state.counter} </h1>
      <Stack direction='horizontal' gap={2}>
        <Button variant='success' onClick={() => dispatch(increase())}>Arttir</Button>
        <Button variant='warning' onClick={() => dispatch(decrease())}>Azalt</Button>
        <Button variant='danger' onClick={() => dispatch(setCount(0))}>Sifirla</Button>
      </Stack>
    </div>
  );
};

export default CounterPage;
