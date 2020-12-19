import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { postRootSelector } from '../../../config/redux/post/selector';
import * as action from '../../../config/redux/post/action'


const Post = () => {
  const postState = useSelector(postRootSelector, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.getPost())
  }, [])

  return (
    <div>
      {postState.posts.map((v: any, i: number) => {
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
