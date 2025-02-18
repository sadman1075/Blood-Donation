import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Context/AuthContext";
import { Link, useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import Loader from "../../Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Dashboardinfo = () => {
    const [donationinfos, setDonationinfos] = useState(null)
    const { duser } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const [totalUser, setTotalUser] = useState()
    const [amount, setAmount] = useState(0)

    const { data: users } = useQuery({
        queryKey: ["users"],
        queryFn: async () => fetch("https://blood-donation-server-hazel-gamma.vercel.app/users")
            .then(res => res.json())
            .then(data => setTotalUser(data))

    })

    // const totalUser = useLoaderData()


    const [totalDonationReq, setTotalDonationReq] = useState(null)
    useEffect(() => {
        fetch("https://blood-donation-server-hazel-gamma.vercel.app/all-donation-request")
            .then(res => res.json())
            .then(data => setTotalDonationReq(data))
    }, [])



    const { data, isPending, refetch } = useQuery({
        queryKey: ["donationinos", user?.email],
        queryFn: async () => {
            fetch(`https://blood-donation-server-hazel-gamma.vercel.app/my-latest-donation-request?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setDonationinfos(data))
        }


    })

    if (isPending) {
        return <Loader></Loader>
    }

    const handleDeleteRequest = (donationinfo) => {

        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert ${donationinfo.recipient}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const { data } = useQuery({
                    queryKey: ["deletedinfo"],
                    queryFn: axios.delete(`https://blood-donation-server-hazel-gamma.vercel.app/my-donation-request/${donationinfo?._id}`)
                        .then(data => {
                            if (data.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });

                                refetch()
                            }
                        })
                })



                    .catch(error => toast.error(error.message))

            }
        });

    }


    const handledonestatus = (id) => {
        const { data } = useQuery({
            queryKey: ["updates"],
            queryFn: axios.put(`https://blood-donation-server-hazel-gamma.vercel.app/donation-request-done/${id}`)
                .then(data => {
                    toast.success("you have successfully submitted")
                })
        })

        refetch()

    }
    const handlecalcelstatus = (id) => {
        const { data } = useQuery({
            queryKey: ["updates"],
            queryFn: axios.put(`https://blood-donation-server-hazel-gamma.vercel.app/donation-request-cancel/${id}`)
                .then(data => {
                    toast.success("you have successfully submitted")
                })
        })
        refetch()
    }


    return (
        <div>
            <h1 className="text-center font-bold text-3xl lg:text-5xl mb-10">Welcome, {user?.displayName}</h1>

            {
                duser.role === "Admin" ?
                    <div className="grid lg:flex justify-center mt-20 ">
                        <div className="stats shadow lg:p-10">
                            <div className="stat place-items-center lg:p-10">
                                <div className="stat-title">Total Donation Request</div>
                                <div className="stat-value">{totalDonationReq?.length}</div>
                                <div className="stat-desc">From January 1st to February 1st</div>
                            </div>

                            <div className="stat place-items-center lg:p-10">
                                <div className="stat-title">Total Users</div>
                                <div className="stat-value text-secondary">{totalUser?.length}</div>
                                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                            </div>

                            <div className="stat place-items-center lg:p-10">
                                <div className="stat-title">total funding</div>
                                <div className="stat-value">1546</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>
                        </div>
                    </div> : duser.role === "volunteer" ?
                        <div className="grid lg:flex justify-center mt-20 ">
                            <div className="stats shadow lg:p-10">
                                <div className="stat place-items-center lg:p-10">
                                    <div className="stat-title">Total Donation Request</div>
                                    <div className="stat-value">{totalDonationReq?.length}</div>
                                    <div className="stat-desc">From January 1st to February 1st</div>
                                </div>

                                <div className="stat place-items-center lg:p-10">
                                    <div className="stat-title">Total Users</div>
                                    <div className="stat-value text-secondary">{totalUser?.length}</div>
                                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                                </div>

                                <div className="stat place-items-center lg:p-10">
                                    <div className="stat-title">New Registers</div>
                                    <div className="stat-value">1546</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>
                            </div>
                        </div> :
                        <div>
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
                                                                    <Link to={`/donation-request-details/${donationinfo._id}`} className="btn  bg-yellow-500 text-white ">View</Link>
                                                                    <Link to={`/dashboard/edit-donation-request/${donationinfo._id}`} className="btn ml-2 bg-green-500 text-white">Edit</Link>
                                                                    <Link onClick={() => handleDeleteRequest(donationinfo)} className="btn ml-2 bg-red-500 text-white">Delete</Link>
                                                                </>

                                                            }
                                                        </td>
                                                    </tr>)
                                                }



                                            </tbody>
                                        </table>
                                    </div>
                            }

                            <div className="flex justify-center">
                                <Link className="btn bg-black text-white " to={"/dashboard/my-donation-request"}>View My All Request</Link>
                            </div>
                        </div>
            }



        </div>
    );
};

export default Dashboardinfo;