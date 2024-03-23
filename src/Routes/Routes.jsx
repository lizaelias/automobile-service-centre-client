

import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EroorPage from "../Pages/EroorPage/EroorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<EroorPage></EroorPage>,

      children:[
        {
           path:'/',
           element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }

      ]
    },
  ]);

  export default router;