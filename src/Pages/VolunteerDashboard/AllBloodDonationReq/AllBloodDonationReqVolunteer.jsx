import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import Loader from "../../Loader/Loader";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import { format } from "date-fns";

const AllBloodDonationReqVolunteer = () => {
    const [donationinfos, setDonationinfos] = useState(null)
    const { user } = useContext(AuthContext)
    const [status, setStatus] = useState("")

    const { data, refetch } = useQuery({
        queryKey: ["donate", status],
        queryFn: async () => fetch(`https://blood-donation-server-hazel-gamma.vercel.app/all-donation-request?status=${status}`)
            .then(res => res.json())
            .then(data => setDonationinfos(data))

    })
    // refetch()




    // const { sats } = useQuery({
    //     queryKey: ["status"],
    //     queryFn: async () => fetch(`https://blood-donation-server-hazel-gamma.vercel.app/all-donation-request?status=${status}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // })

    const handledonestatus = (id) => {

        axios.put(`https://blood-donation-server-hazel-gamma.vercel.app/donation-request-done/${id}`)
            .then(data => {
                refetch()
                toast.success("you have successfully change the status to done")
            })




    }
    const handlecalcelstatus = (id) => {

        axios.put(`https://blood-donation-server-hazel-gamma.vercel.app/donation-request-cancel/${id}`)
            .then(data => {
                refetch()

                toast.success("you have successfully change the status to cancel")
            })

    }

    const handlependingstatus = (id) => {

        axios.put(`https://blood-donation-server-hazel-gamma.vercel.app/donation-request-pending/${id}`)
            .then(data => {
                refetch()
                toast.success("you have successfully change the status to pending")
            })


    }

    const handleUpdate = (id) => {

        queryFn: axios.put(`https://blood-donation-server-hazel-gamma.vercel.app/donation-request-details/${id}`)
            .then(data => {
                refetch()
                toast.success("you have successfully change the status to inprogress")
            })


    }


    return (
        <div>
            <div>
                <h1 className="mb-10 font-bold text-3xl lg:text-5xl text-center">All Blood Donation Request</h1>
                <div className="mb-5">
                    <p className="text-2xl font-bold p-3">Filter By Status</p>
                    <select className="select select-ghost border-1 border-gray-300 bg-white w-full " onChange={(e) => setStatus(e.target.value)} required>
                        <option selected disabled>Select status</option>
                        <option value={""}>All</option>
                        <option>pending</option>
                        <option>inprogress</option>
                        <option>done</option>
                        <option>cancel</option>
                    </select>
                </div>
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
                                                        <Link onClick={() => handlependingstatus(donationinfo._id)} className="btn ml-2 bg-yellow-500 text-white">Pending</Link>
                                                        <Link onClick={() => handlecalcelstatus(donationinfo._id)} className="btn ml-2 bg-red-500 text-white">Cancel</Link>
                                                    </> :

                                                        <>
                                                            <Link onClick={() => handleUpdate(donationinfo._id)} className="btn ml-2 bg-purple-500 text-white">Inprogress</Link>

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

export default AllBloodDonationReqVolunteer;