import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import { ErrorPage } from './ErrorPage.jsx'


const router =createBrowserRouter(
  [
    {
      path:'/',
      element:<App />,
      errorElement:<ErrorPage/>,
      children:[{
      path:'/contacts',
      element:<p>Hello World</p>
      }]
    },
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
