import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import toast from "react-hot-toast";

const AllUser = () => {
    const [users, setUsers] = useState(null)
    const { data, isPending } = useQuery({
        queryKey: ["donationinos"],
        queryFn: axios.get("http://localhost:5000/users")
            .then(data => setUsers(data.data))

    })

    if (isPending) {
        return <Loader></Loader>
    }

    const handleStatusBlock = (id) => {
        const { data, refetch } = useQuery({
            queryKey: ["updates"],
            queryFn: axios.put(`http://localhost:5000/users-block/${id}`)
                .then(data => {
                    toast.success("you have successfully submitted")
                })
        })
        refetch()
    }
    const handleStatusUnblock = (id) => {
        const { data, refetch } = useQuery({
            queryKey: ["updates"],
            queryFn: axios.put(`http://localhost:5000/users-unblock/${id}`)
                .then(data => {
                    toast.success("you have successfully submitted")
                })
        })
        refetch()
    }

    const handleAdmin = (id) => {
        const { data, refetch } = useQuery({
            queryKey: ["updates"],
            queryFn: axios.put(`http://localhost:5000/users-role/${id}`)
                .then(data => {
                    toast.success("you have successfully submitted")
                })
        })
        refetch()
    }
    return (
        <div>
            <h1 className="mb-10 font-bold text-3xl lg:text-5xl text-center">All Users</h1>
            {
                users?.length == 0 ? <p className="text-center font-bold  lg:text-5xl text-red-400 mb-10">There is no user yet </p> :


                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>User img</th>
                                    <th>User Name</th>
                                    <th>User Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map(user => <tr key={user._id}>


                                        <td> <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src={user.image} />
                                            </div>
                                        </div></td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role === "Admin" ? "Admin" : <Link onClick={() => handleAdmin(user._id)} className="btn bg-yellow-500 text-white">Make Admin</Link>}</td>
                                        <td>{user.status}</td>
                                        <td>{user.status === "active" ? <Link onClick={() => handleStatusBlock(user._id)} className="btn bg-red-500 text-white">Block</Link> : <Link onClick={() => handleStatusUnblock(user._id)} className="btn bg-green-500 text-white">Unblock</Link>}</td>


                                    </tr>)
                                }



                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default AllUser;