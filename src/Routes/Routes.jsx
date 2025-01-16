import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Home/Contact/Contact";
import About from "../Pages/Home/About/About";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Layouts></Layouts>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/about",
                element:<About></About>
            }
        ]
    }
])