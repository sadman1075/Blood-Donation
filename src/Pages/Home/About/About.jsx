import { Link } from "react-router-dom";
import about from "../../../assets/about.jpg"

const About = () => {
    return (
        <div>

            <div className="pt-10 pb-10 lg:pt-20 lg:pb-20" >
                <div className="hero bg-base-100 ">
                    <div className="hero-content flex-col lg:flex-row gap-5">
                        <div className="w-full lg:w-1/2">
                            <img
                                src={about}
                                className=" rounded-lg w-full lg:h-[500px]  " />
                        </div>
                        <div className="w-full lg:w-1/2 lg:ml-10">
                            <h1 className="text-3xl text-center lg:text-5xl font-bold ">About Our Website</h1>
                            <p className="py-6 text-justify">
                                Blood Donation Management System, aims to bridge the gap between blood donors, recipients, and blood banks by providing a streamlined and efficient platform. The system will facilitate real-time connection among donors and recipients, making it easier to respond to emergencies and routine medical need.
                          
                                It includes features like user registration for donors and recipients, search and filter options to locate nearby donors or blood banks based on blood type and location, and a request management module for urgent blood requirements. Additionally, the platform integrates geolocation for mapping nearby resources and notification systems to inform users about donation opportunities or urgent needs. Targeting individuals, hospitals, and blood banks, our project seeks to raise awareness about the importance of blood donation while ensuring transparency and accountability in the process. Currently, the project is [insert your project's phase: planning, development, or deployment], and we are focused on building a user-friendly, secure, and impactful system to promote community health and well-being.
                            </p>
                            <Link to={"/donation-request"} className="btn bg-black text-white  mt-3">Donation Blood</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;