import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogFetch from '../axios/config';
import "./NewPost.css";




const NewPost = () => {
  const navigate = useNavigate ();
  const [tittle, setTittle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
      e.preventDefault();
      const post = {tittle, body, userId: 1};
      await blogFetch.post("/posts", {
        body: post,
      });
      navigate("/");
  }

  return (
    <div className='new-post'>
      <h2>Inserir novo Post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
          <label htmlFor='tittle'>Título:</label>
          <input type="tittle" name="tittle" id="tittle" placeholder='Digite o título' 
          onChange={(e) => setTittle(e.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor='body'>Conteúdo:</label>
          <textarea name="body" id="body" placeholder='Digite o conteúdo' onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <input type='submit' value="Criar Post" className='btn' />
      </form>
    </div>
  )
}

export default NewPost