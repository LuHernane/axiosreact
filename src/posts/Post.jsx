import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import blogFetch from "../axios/config";
import './Post.css';

export function PostBody () {
    const [post, setPosts] = useState([]);
    const { id } = useParams();
  
    const getPosts = async () => {
      try { 
        const response = await blogFetch.get(`posts/${id}`);
        const data = response.data;
        setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPosts();
   },[]);

  return (
      <div className= "blog" key={post.id}>
        <h2>{post.tittle}</h2>
        <p>{post.body}</p>
      </div>
   )
}