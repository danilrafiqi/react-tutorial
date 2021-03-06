import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { postActionSelector, postRootSelector } from '../../../config/redux/post/selector';
import * as action from '../../../config/redux/post/action'
import * as actionName from '../../../config/redux/post/string'
import { Link, useHistory } from 'react-router-dom';


const Post = () => {
  const postState = useSelector(postRootSelector, shallowEqual)
  const dispatch = useDispatch()
  const actionState = useSelector(postActionSelector)
  const history = useHistory()

  useEffect(() => {
    if (postState.success?.type === actionName.DELETE_POST) {
      dispatch(action.getPost())
    }
    if (postState.success?.type === actionName.GET_POST) {
      dispatch(action.resetPost())
    }
  }, [actionState])

  useEffect(() => {
    dispatch(action.getPost())
    return () => {
      dispatch(action.resetPost())
    }
  }, [])

  return (
    <div>
      {postState.error && postState.error.type === actionName.GET_POST &&
        <div>{postState.error.message}</div>
      }
      <Link to='/todo'>todo</Link>
      <br />
      <Link to='/post/create'>Create Post</Link>
      {postState.loading ?
        <div>Loading . . .</div>
        :
        postState.posts.map((v: any, i: number) => {
          return (
            <div key={i.toString()}>
              <div>{v.id}</div>
              <div>{v.title}</div>
              <div>{v.author}</div>
              <button onClick={() => {
                dispatch(action.deletePost(v.id))
              }}>
                delete
              </button>
              <button onClick={() => {
                history.push(`/post/${v.id}`, { post: v })
              }}>
                edit
              </button>
              <hr />
            </div>
          )
        })}
    </div>
  );
};

export default Post;
