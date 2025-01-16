import { useContext } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaBloggerB, FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdContactPage, MdDashboardCustomize, MdRoundaboutLeft } from "react-icons/md";
import { RiSidebarFoldFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { IoIosCreate } from "react-icons/io";

const Dashboard = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <label htmlFor="my-drawer-2" className="btn bg-black text-white  drawer-button lg:hidden">
                        <RiSidebarFoldFill className="text-3xl" />
                        Open
                    </label>
                    <div className="mt-5">
                        {
                            <Outlet></Outlet>
                        }
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-2">
                        {/* Sidebar content here */}
                        <div className="avatar flex justify-center mb-10">
                            <div className="w-12 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <li><Link to={"/dashboard"}><MdDashboardCustomize />Dashboard</Link></li>
                        <li><Link to={"/my-donation-request"}><BiSolidDonateBlood />My Donation Request</Link></li>
                        <li><Link to={"/my-donation-request"}><IoIosCreate />Create Donation Request</Link></li>
                        <div className="divider"></div>
                        <li><Link to={"/"}><FaHome />Home</Link></li>
                        <li><Link to={"/donation-request"}><BiSolidDonateBlood />Donation Requests</Link></li>
                        <li><Link to={"/blog"}><FaBloggerB />blog</Link></li>
                        <li><Link to={"/About"}><MdRoundaboutLeft className="text-black" />
                            About</Link></li>
                        <li><Link to={"/contact"}><MdContactPage />Contact</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;