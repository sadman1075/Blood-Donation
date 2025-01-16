import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Layouts></Layouts>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])