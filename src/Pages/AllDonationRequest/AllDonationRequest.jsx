import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Loader from "../Loader/Loader";
import axios from "axios";
import { format } from "date-fns";

const AllDonationRequest = () => {
    const [donationinfos, setDonationinfos] = useState(null)
    const { user } = useContext(AuthContext)

    const { data, isPending } = useQuery({
        queryKey: ["donationinos"],
        queryFn: axios.get("http://localhost:5000/donation-request")
            .then(data => setDonationinfos(data.data))
    })
    if (isPending) {
        return <Loader></Loader>
    }
    return (
        <div className="pt-20 lg:pt-32">
            <h1 className="pb-10 font-bold text-3xl lg:text-5xl text-center"> Donation Request</h1>
            {
                donationinfos?.length == 0 ? <p className="text-center font-bold  lg:text-5xl text-red-400 mb-10">Your are not create any blood donation request</p> :


                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Recipient Name</th>
                                    <th>Recipient Location</th>
                                    <th>Donation Date</th>
                                    <th>Donation Time</th>
                                    <th>Blood Group</th>
                                    <th>Donation Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    donationinfos?.map(donationinfo => <tr key={donationinfo._id}>


                                        <td>{donationinfo.recipient}</td>
                                        <td>{donationinfo.address}</td>
                                        <td>{format(new Date(donationinfo.date), "P")}</td>
                                        <td>{donationinfo.time}</td>
                                        <td>{donationinfo.blood_group}</td>
                                        <td>{donationinfo.status}</td>

                                        <td className="flex">
                                            <Link to={`/donation-request-details/${donationinfo._id}`} className="btn  bg-yellow-500 text-white ">View</Link>
                                           
                                        </td>
                                    </tr>)
                                }



                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default AllDonationRequest;