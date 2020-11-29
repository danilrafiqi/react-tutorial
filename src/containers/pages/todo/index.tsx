import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { todoRootSelector } from '../../../config/redux/todo/selector';


const Todo = () => {
  const todoState = useSelector(todoRootSelector, shallowEqual)

  return (
    <div>
      <div>Todo</div>
      {todoState.todo.map((v: string, i: number) => {
        return <div key={i.toString()}> data {v}</div>
      })}
    </div>
  );
};

export default Todo;
