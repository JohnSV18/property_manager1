import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/home';
import MainNavbar from './Components/Navbar/navbar';
import Login from './Components/Login/login';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// MainNavbar is the parent element as it will be on every single page
const router = createBrowserRouter([
  {
    path: '/',
    element: < MainNavbar />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: < Login />
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
