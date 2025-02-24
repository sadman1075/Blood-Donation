import { Link } from "react-router-dom";
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <div className="banner pt-10  lg:p-48">
                <div className="bg-black opacity-60">
                    <h1 className="text-4xl text-center text-white font-bold pt-12">Dashboard</h1>
                    <p className="text-center text-xl text-white mt-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                    <div className="flex justify-center gap-4 mt-8 pb-12">
                        <Link to={"/donation-request"} className="btn ">Join as a Donor</Link>
                        <Link to={"/search"} className="btn ">Search Donors</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;