import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../Pages/Dashboard/MySelectedClasses/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/instructors',
            element: <Instructors/>
        },
        {
            path: '/classes',
            element: <Classes/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/registration',
            element: <Registration/>
        },
        
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
          path: 'myselectedclasses',
          element: <MySelectedClasses/>
        },
        {
          path: 'manageclasses',
          element: <ManageClasses/>
        },
        {
          path: 'manageusers',
          element: <ManageUsers/>
        }
      ]
    },

    {
      path: '*',
      element: <ErrorPage/>
    }
  ]);