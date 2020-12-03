import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { todoRootSelector } from '../../../config/redux/todo/selector';
import * as action from '../../../config/redux/todo/action'


const Todo = () => {
  const todoState = useSelector(todoRootSelector, shallowEqual)
  const dispatch = useDispatch()
  const [todo, setTodo] = useState<string>('')
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const [idx, setIdx] = useState<number>(0)

  return (
    <div>
      <div>Todo</div>
      <input type="text" name="todo" id="todo"
        onChange={(e) => {
          setTodo(e.target.value)
        }}
        value={todo}
      />

      {
        isUpdate ?
          <button onClick={() => {
            dispatch(action.todoUpdate({
              idx: idx,
              todo: todo,
            }))
            setIsUpdate(false)
            setIdx(0)
            setTodo('')
          }}>
            Update
          </button>
          :
          <button onClick={() => {
            dispatch(action.todoAdd(todo))
            setTodo('')
          }}>
            Create
          </button>
      }

      {todoState.todo.map((v: string, i: number) => {
        return (
          <div key={i.toString()}>
            <div>{v}</div>
            <button onClick={() => {
              setTodo(v)
              setIsUpdate(true)
              setIdx(i)
            }}>
              Update
            </button>
            <button onClick={() => dispatch(action.todoDelete(i))}>
              Delete
            </button>
          </div>
        )
      })}
    </div>
  );
};

export default Todo;
