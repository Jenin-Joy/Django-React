import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import District from './Admin/District';
import Category from './Admin/Category';
import Place from './Admin/Place';
import Subcategory from './Admin/Subcategory';
import Login from './Guest/Login';
import User_Registration from './Guest/User_Registration';
import Shop_Registration from './Guest/Shop_Registration';
import User from './Admin/User';
import MainPage from './Admin/MainPage';
import Admin_Homepage from './Admin/Admin_Homepage';
import NewShop from './Admin/NewShop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path:"User",
    element: <User_Registration/>
  },
  {
    path:"Shop",
    element: <Shop_Registration/>
  },
  {
    path: "Admin",
    element: <MainPage />,
    children: [
      {
        path: "",
        element: <Admin_Homepage/>
      },
      {
        path: "District",
        element: <District/>
      },
      {
        path: "Category",
        element: <Category/>
      },
      {
        path: "Place",
        element: <Place/>
      },
      {
        path: "Subcategory",
        element: <Subcategory/>
      },
      {
        path: "User",
        element: <User/>
      },
      {
        path: "NewShop",
        element: <NewShop/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
