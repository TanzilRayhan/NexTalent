/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./privateroute/PrivateRoute";
import MyBids from "./pages/MyBids";
import AddJob from "./pages/AddJob";
import PostedJobs from "./pages/PostedJobs";
import BidRequests from "./pages/BidRequests";
import UpdateJob from "./pages/UpdateJob";
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addJob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
      },
      {
        path: "/updateJob",
        element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
      },
      {
        path: "/postedJobs",
        element: <PrivateRoute><PostedJobs></PostedJobs></PrivateRoute>,
      },
      {
        path: "/bidRequests",
        element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
      },
      {
        path: "/bids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
      },
    ]
    
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
