import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { postRootSelector } from '../../../config/redux/post/selector';
import * as action from '../../../config/redux/post/action'
import { Link } from 'react-router-dom';


const Post = () => {
  const postState = useSelector(postRootSelector, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.getPost())
    return () => {
      console.error("cek unmount")
      dispatch(action.resetPost())
    }
  }, [])

  return (
    <div>
      {postState.error &&
        <div>{postState.error}</div>
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
            </div>
          )
        })}
    </div>
  );
};

export default Post;
