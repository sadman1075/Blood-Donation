import { Link } from "react-router-dom";
import logo from "../../../assets/bg.png"

const Header = () => {
    const navOptions = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/donation-request"}>Donation Requests</Link></li>
        <li><Link to={"/shop"}>blog</Link></li>
        <li><Link to={"/contact"}>Funding</Link></li>
        <li><Link to={"/About"}>About</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
        {/* <li><Link onClick={handleLogOut}>Log out</Link></li> */}



    </>
    return (
        <div>
            <div className="navbar fixed z-10 opacity-65 max-w-screen-xl text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black  rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                navOptions
                            }

                        </ul>
                    </div>
                    <Link><img src={logo} className="w-24" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-4 ">
                    {/* {
                        user ? <>
                            <p className="flex gap-2 btn">
                                <FaCartArrowDown className="text-3xl text-black" />

                                <div className="badge badge-secondary">+0</div>
                            </p>

                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={""} />
                                </div>
                            </div>
                        </> :
                            <>
                                <Link className="btn" to={"/registration"}>Registration</Link>
                                <Link className="btn bg-black text-white border-0" to={"/login"}>Login</Link>
                            </>
                    } */}


                </div>
            </div>
        </div>
    );
};

export default Header;