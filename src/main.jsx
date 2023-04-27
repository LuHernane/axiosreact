import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { PostBody } from './posts/post'
import Home from './routes/Home'
import NewPost from './routes/NewPost'

const router = createBrowserRouter([
{
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/new',
      element: <NewPost />,
    },
    {
      path: '/posts/:id',
      element: <PostBody />,
    }
  ],
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
