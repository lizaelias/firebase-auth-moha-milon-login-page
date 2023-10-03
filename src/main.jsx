import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Root from './components/Root'; // Ensure the path is correct
import Authproviders from './providers/Authproviders';
import Order from './components/Order';
import PrivateRoute from './components/routes/PrivateRoute';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
    <RouterProvider router={router} />
    </Authproviders>
  </React.StrictMode>
);
