import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import blogFetch from '../axios/config';

const Home = () => {
   const [posts, setPosts] = useState ([])
   const getPosts = async () => {
      try {
        const response = await blogFetch.get("/posts");
        const data = response.data;
        setPosts(data);
      } catch (error) {
      
      }
   }
   useEffect(() => {
    getPosts();
   },[]);

  return (
    <div className= "home">
      <p>ultimos posts</p>
    {posts.length===0 ? <p>carregando...</p> : (
      posts.map((post) => (
        <div className='post' key={post.id}>
          <h2>{post.tittle}</h2>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className='btn'>Ler mais  </Link>

        </div>
       ))
    )}
    
    </div>
  );
};

export default Home