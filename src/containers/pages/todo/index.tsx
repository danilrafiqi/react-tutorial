import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { todoRootSelector } from '../../../config/redux/todo/selector';
import * as action from '../../../config/redux/todo/action'


const Todo = () => {
  const todoState = useSelector(todoRootSelector, shallowEqual)
  const dispatch = useDispatch()
  const [todo, setTodo] = useState<string>('')

  return (
    <div>
      <div>Todo</div>
      <input type="text" name="todo" id="todo"
        onChange={(e) => {
          setTodo(e.target.value)
        }}
        value={todo}
      />
      <button onClick={() => {
        dispatch(action.todoAdd(todo))
        setTodo('')
      }}>
        Create Todo
      </button>
      {todoState.todo.map((v: string, i: number) => {
        return <div key={i.toString()}> data {v}
          <button onClick={() => dispatch(action.todoDelete(i))}>
            Delete
        </button>
        </div>
      })}
    </div>
  );
};

export default Todo;
