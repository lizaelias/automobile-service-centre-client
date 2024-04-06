

import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EroorPage from "../Pages/EroorPage/EroorPage";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Booking from "../Pages/Booking/Booking";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import ServicesPages from "../Pages/Home/ServicesPages/ServicesPages";

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
        },
        {
          path:'/checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=>fetch(`https://automobile-service-centre-server.vercel.app/services/${params.id}`)
        },
        {
           path:'/booking',
           element:<PrivateRoutes><Booking></Booking></PrivateRoutes>
        },
        {
          path:'/service',
          element:<ServicesPages></ServicesPages>
        }

      ]
    },
  ]);

  export default router;