import { format } from "date-fns";
import { Link } from "react-router-dom";
import image from "../../../public/dd.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaHospital, FaUser } from "react-icons/fa";

const LatestDonationRequest = ({ donationRequest }) => {
    const { _id, blood_group, recipient, address, date,hospital_name } = donationRequest
    return (
        <div>
            <div className="card card-compact bg-base-100 w-full h-[450px] shadow-xl" data-aos="zoom-in" data-aos-duration="2000">
                <figure>
                    <img
                        src={image}
                        className="w-full h-60"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Urgent <span className="text-red-500 font-bold">{blood_group}</span> needed for <span className="text-red-500 font-bold">{recipient}</span></h2>
                    <div className="flex items-center  gap-3">
                        <FaUser className="text-lg text-red-500" />
                        <h2 className="  text-xl ">{recipient}</h2>

                    </div>
                    <div className="flex items-center  gap-3">
                        <FaLocationDot className="text-lg text-red-500" />
                        <h2 className="  text-xl ">{address}</h2>

                    </div>
                    <div className="flex items-center  gap-3">
                    <FaHospital className="text-lg text-red-500" />
                        <h2 className="  text-xl ">{hospital_name}</h2>

                    </div>
                    {/* <p><b>Location: </b>  {location}</p> */}
                    <div className="flex items-center gap-3">
                        <BsCalendarDateFill className="text-lg text-red-500" />

                        <p className="text-lg">{format(new Date(date), "P")}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`} className="btn bg-black text-white">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestDonationRequest;