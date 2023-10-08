import {createBrowserRouter} from "react-router-dom";

import App from './App.jsx'
import Home from './page/Home/Home.jsx';
import ErrorPage from './page/ErrorPage/ErrorPage.jsx';
import Login from './page/Login/Login.jsx';
import Register from './page/Register/Register.jsx';
import ServiceDetails from './page/ServiceDetails/ServiceDetails.jsx';
import Orders from './page/Orders/Orders.jsx';
import Blogs from './page/Blogs/Blogs.jsx';
import PrivateRoute from "./PrivateRoute.jsx";

export const router = createBrowserRouter([
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
          element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
        },
        {
          path: "/orders",
          loader: () => fetch('/fakeData.json'),
          element: <PrivateRoute><Orders/></PrivateRoute>,
        },
        {
          path: "/blogs",
          loader: () => fetch('/fakeBlogData.json'),
          element: <PrivateRoute><Blogs/></PrivateRoute>,
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