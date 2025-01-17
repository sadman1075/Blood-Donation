import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Home/Contact/Contact";
import About from "../Pages/Home/About/About";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import DashboardInfo from "../Pages/Dashboard/Dashboard/DashboardInfo";
import Blogs from "../Pages/Home/Blogs/Blogs";
import BlogDetails from "../Pages/Home/BlogDetails/BlogDetails";
import CreateDonationBlood from "../Pages/Dashboard/CreateDonationBlood/CreateDonationBlood";
import MyDonationRequest from "../Pages/Dashboard/MyDonationRequest/MyDonationRequest";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts></Layouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>
            },
            {
                path: "/blog-details/:id",
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardInfo></DashboardInfo>
            },
            {
                path: "/dashboard/create-blood-donation",
                element: <CreateDonationBlood></CreateDonationBlood>
            },
            {
                path: "/dashboard/my-donation-request",
                element: <MyDonationRequest></MyDonationRequest>
            }
        ]
    }
])