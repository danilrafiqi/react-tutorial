import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { todoRootSelector } from '../../../config/redux/todo/selector';
import * as action from '../../../config/redux/todo/action'


const Todo = () => {
  const todoState = useSelector(todoRootSelector, shallowEqual)
  const dispatch = useDispatch()

  return (
    <div>
      <div>Todo</div>
      <button onClick={() => {
        dispatch(action.todoAdd("mdanil"))
      }}>
        create todo
      </button>
      {todoState.todo.map((v: string, i: number) => {
        return <div key={i.toString()}> data {v}
          <button onClick={() => dispatch(action.todoDelete(i))}>
            delete
        </button>
        </div>
      })}
    </div>
  );
};

export default Todo;
