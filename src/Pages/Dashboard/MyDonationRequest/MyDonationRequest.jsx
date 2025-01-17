import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import Loader from "../../Loader/Loader";

const MyDonationRequest = () => {
    const [donationinfos, setDonationinfos] = useState(null)
    const { user } = useContext(AuthContext)

    const { data,isPending } = useQuery({
        queryKey: ["donationinos"],
        queryFn: axios.get(`http://localhost:5000/my-donation-request?email=${user?.email}`)
            .then(data => setDonationinfos(data.data))
    })
    if(isPending){
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className="mb-10 font-bold text-3xl lg:text-5xl text-center">My Donation Request</h1>
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
                                <td>{donationinfo.date}</td>
                                <td>{donationinfo.time}</td>
                                <td>{donationinfo.blood_group}</td>
                                <td>{donationinfo.status}</td>
                            
                                <td className="flex">
                                    <Link className="btn  bg-yellow-500 text-white ">View</Link>
                                    <Link className="btn ml-2 bg-green-500 text-white">Edit</Link>
                                    <Link className="btn ml-2 bg-red-500 text-white">Delete</Link>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDonationRequest;