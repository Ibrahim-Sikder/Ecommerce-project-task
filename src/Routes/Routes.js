import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToCart from "../Pages/AddToCart/AddToCart";
import AddProduct from "../Pages/Dashboard/Admin/AddProduct";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";




export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products',
                element: <PrivateRoute><Product></Product></PrivateRoute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/cart',
                element:<PrivateRoute><AddToCart></AddToCart></PrivateRoute>
            },
            {
                path:'/addproduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    },
    
])