import { Link } from "react-router-dom";
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <div className="banner pt-10  lg:p-48 ">
                <div className="bg-black opacity-60">
                    <h1 className="text-4xl text-center text-white font-bold pt-12">Dashboard</h1>
                    <p className="text-center text-xl text-white mt-4 ">Blood donation is a voluntary process where a person <br /> donates their blood for medical use. </p>

                    <div className="flex justify-center gap-4 mt-8 pb-12">
                        <Link to={"/donation-request"} className="btn bg-white text-black">Join as a Donor</Link>
                        <Link to={"/search"} className="btn bg-white text-black ">Search Donors</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;