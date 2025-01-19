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
import AllDonationRequest from "../Pages/AllDonationRequest/AllDonationRequest";
import AllDonationRequestDetails from "../Pages/AllDonationRequestDetails/AllDonationRequestDetails";
import PrivateRoutes from "./PrivateRoutes";
import AllUser from "../Pages/AdminDashboard/AllUser/AllUser";
import AllBloodDonationRequest from "../Pages/AdminDashboard/AllBloodDonationRequest/AllBloodDonationRequest";
import AllBloodDonationReqVolunteer from "../Pages/VolunteerDashboard/AllBloodDonationReq/AllBloodDonationReqVolunteer";
import ContentManagements from "../Pages/AdminDashboard/ContentManagement/ContentManagements";
import AddBlog from "../Pages/AdminDashboard/AddBlog/AddBlog";

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
                element: <PrivateRoutes><BlogDetails></BlogDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`)
            },
            {
                path: "/donation-request",
                element: <AllDonationRequest></AllDonationRequest>
            },
            {
                path: "/donation-request-details/:id",
                element: <PrivateRoutes><AllDonationRequestDetails></AllDonationRequestDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/donation-request-details/${params.id}`)

            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "/dashboard/dashboardinfo",
                element: <PrivateRoutes><DashboardInfo></DashboardInfo></PrivateRoutes>
            },
            {
                path: "/dashboard/create-blood-donation",
                element: <PrivateRoutes><CreateDonationBlood></CreateDonationBlood></PrivateRoutes>
            },
            {
                path: "/dashboard/my-donation-request",
                element: <PrivateRoutes><MyDonationRequest></MyDonationRequest></PrivateRoutes>
            },
            {
                path:"/dashboard/all-users",
                element:<AllUser></AllUser>
            },
            {
                path:"/dashboard/all-blood-donation-request",
                element:<AllBloodDonationRequest></AllBloodDonationRequest>
            },
            {
                path:"/dashboard/content-management",
                element:<ContentManagements></ContentManagements>
            },
            {
                path:"/dashboard/add-blog",
                element:<AddBlog></AddBlog>
            },
            {
                path:"/dashboard/volunteer/all-blood-donation-request",
                element:<AllBloodDonationReqVolunteer></AllBloodDonationReqVolunteer>
            },
           
        ]
    }
])