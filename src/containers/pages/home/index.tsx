import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { counterRootSelector } from '../../../config/redux/counter/selector';
import * as action from '../../../config/redux/counter/action'


const Home = () => {
  const history = useHistory();
  const counterState = useSelector(counterRootSelector, shallowEqual)
  const dispacth = useDispatch()

  return (
    <div>
      <div>Home</div>
      <div>{counterState.counter}</div>
      <button onClick={() => dispacth(action.increment())}>+</button>
      <button onClick={() => dispacth(action.decrement())}>-</button>
      <button onClick={() => history.push('/contact')}>
        pindah ke contact
      </button>
      <button onClick={() => history.push('/about')}>replace about</button>
      <button onClick={() => history.goBack()}>goback</button>
      <button onClick={() => history.goForward()}>goForward</button>
      <button onClick={() => history.push("/blog/1")}>go to blog 1  </button>
    </div>
  );
};

export default Home;
