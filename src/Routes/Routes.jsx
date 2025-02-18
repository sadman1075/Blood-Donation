import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Home/Contact/Contact";
import About from "../Pages/Home/About/About";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
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
import EditMyDonationRequest from "../Pages/Dashboard/EditMyDonationRequest/EditMyDonationRequest";
import Dashboardinfo from "../Pages/Dashboard/Dashboard/Dashboardinfo";
import Profile from "../Pages/Profile/Profile";
import Search from "../Pages/Search/Search";
import Funding from "../Pages/Funding/Funding";
import AddFunding from "../Pages/AddFunding/AddFunding";

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
                loader: ({ params }) => fetch(`https://blood-donation-server-hazel-gamma.vercel.app/blog/${params.id}`)
            },
            {
                path: "/donation-request",
                element: <AllDonationRequest></AllDonationRequest>
            },
            {
                path: "/donation-request-details/:id",
                element: <PrivateRoutes><AllDonationRequestDetails></AllDonationRequestDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://blood-donation-server-hazel-gamma.vercel.app/donation-request-details/${params.id}`)

            },
            {
                path: "/search",
                element: <Search></Search>
            },
            {
                path: "/funding",
                element: <PrivateRoutes><Funding></Funding></PrivateRoutes>
            },
            {
                path: "/add-funding",
                element: <PrivateRoutes><AddFunding></AddFunding></PrivateRoutes>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboardinfo></Dashboardinfo>,

            },
            {
                path: "/dashboard/create-blood-donation",
                element: <CreateDonationBlood></CreateDonationBlood>
            },
            {
                path: "/dashboard/my-donation-request",
                element: <MyDonationRequest></MyDonationRequest>
            },
            {
                path: "/dashboard/all-users",
                element: <AllUser></AllUser>
            },
            {
                path: "/dashboard/all-blood-donation-request",
                element: <AllBloodDonationRequest></AllBloodDonationRequest>
            },
            {
                path: "/dashboard/content-management",
                element: <ContentManagements></ContentManagements>
            },
            {
                path: "/dashboard/add-blog",
                element: <AddBlog></AddBlog>
            },
            {
                path: "/dashboard/volunteer/all-blood-donation-request",
                element: <AllBloodDonationReqVolunteer></AllBloodDonationReqVolunteer>
            },
            {
                path: "/dashboard/edit-donation-request/:id",
                element: <EditMyDonationRequest></EditMyDonationRequest>,
                loader: ({ params }) => fetch(`https://blood-donation-server-hazel-gamma.vercel.app/donation-request-details/${params.id}`)
            },
            {
                path: "/dashboard/profile/:id",
                element: <Profile></Profile>
            }

        ]
    }
])