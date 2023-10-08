import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/Home/Home.jsx';
import ErrorPage from './page/ErrorPage/ErrorPage.jsx';
import Login from './page/Login/Login.jsx';
import Register from './page/Register/Register.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import ServiceDetails from './page/ServiceDetails/ServiceDetails.jsx';
import Orders from './page/Orders/Orders.jsx';
import Blogs from './page/Blogs/Blogs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch('/fakeData.json'),
        element: <Home />,
      },
      {
        path: "/details/:id",
        loader: () => fetch('/fakeData.json'),
        element: <ServiceDetails />,
      },
      {
        path: "/orders",
        loader: () => fetch('/fakeData.json'),
        element: <Orders/>,
      },
      {
        path: "/blogs",
        loader: () => fetch('/fakeBlogData.json'),
        element: <Blogs/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
