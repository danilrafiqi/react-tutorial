import React from 'react';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
import Nav from '../../../components/nav';
const Blog = () => {
  const params = useParams<{id:string}>()
  const {params:prm, url, path} = useRouteMatch()
  return (
    <div>
      {console.log('prm',prm)}
      {console.log('url',url)}
      {console.log('path',path)}
      <div>Blog</div>
      <div>id {params.id}</div>
      <Nav />
      <NavLink to="/blog/1">blog1</NavLink>
      <NavLink to="/blog/2">blog2</NavLink>
      <NavLink to="/blog/3">blog3</NavLink>
    </div>
  );
};

export default Blog;
