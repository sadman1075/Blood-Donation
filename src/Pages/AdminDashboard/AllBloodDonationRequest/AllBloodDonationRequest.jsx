import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { format } from "date-fns";
import { useContext, useState } from "react";
import AuthContext from "../../../Context/AuthContext";

const AllBloodDonationRequest = () => {
    const [donationinfos, setDonationinfos] = useState(null)
    const { user } = useContext(AuthContext)

    const { data, isPending } = useQuery({
        queryKey: ["donationinos"],
        queryFn: async () => fetch("http://localhost:5000/all-donation-request")
            .then(res => res.json())

            .then(data => setDonationinfos(data))

    })

    if (isPending) {
        return <Loader></Loader>
    }

    const handledonestatus = (id) => {
        console.log(id);
        const { data, refetch } = useQuery({
            queryKey: ["updates"],
            queryFn: axios.put(`http://localhost:5000/donation-request-done/${id}`)
                .then(data => {
                    toast.success("you have successfully submitted")
                })
        })

        refetch()

    }
    const handlecalcelstatus = (id) => {
        console.log(id);
        const { data, refetch } = useQuery({
            queryKey: ["updates"],
            queryFn: axios.put(`http://localhost:5000/donation-request-cancel/${id}`)
                .then(data => {
                    toast.success("you have successfully submitted")
                })
        })
        refetch()
    }
    return (
        <div>
            <div>
                <h1 className="mb-10 font-bold text-3xl lg:text-5xl text-center">All Blood Donation Request</h1>
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

                                                {
                                                    donationinfo.status === "done" ? "" : donationinfo.status === "cancel" ? "" : donationinfo.status === "inprogress" ? <>
                                                        <Link onClick={() => handledonestatus(donationinfo._id)} className="btn ml-2 bg-green-500 text-white">Done</Link>
                                                        <Link onClick={() => handlecalcelstatus(donationinfo._id)} className="btn ml-2 bg-red-500 text-white">Cancel</Link>
                                                    </> : <>
                                                        <Link className="btn  bg-yellow-500 text-white ">View</Link>
                                                        <Link className="btn ml-2 bg-green-500 text-white">Edit</Link>
                                                        <Link className="btn ml-2 bg-red-500 text-white">Delete</Link>
                                                    </>

                                                }


                                            </td>
                                        </tr>)
                                    }



                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    );
};

export default AllBloodDonationRequest;