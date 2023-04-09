import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToCart from "../Pages/AddToCart/AddToCart";
import AddProduct from "../Pages/Dashboard/Admin/AddProduct";




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
                element: <Product></Product>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/cart',
                element:<AddToCart></AddToCart>
            },
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            }
        ]
    },
    
])