import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import toast from "react-hot-toast";
import { useMutation } from '@tanstack/react-query';

const AllUser = () => {
    const [users, setUsers] = useState(null)
    const [status, setStatus] = useState("")
    const { data, isLoading, } = useQuery({
        queryKey: ["status", status],
        queryFn: async () => fetch(`http://localhost:5000/users?status=${status}`)
            .then(res => res.json())
            .then(data => setUsers(data))

    })



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
    const handleVolunteer = (id) => {
        const { data, refetch } = useQuery({
            queryKey: ["updates"],
            queryFn: axios.put(`http://localhost:5000/users-role-volunteer/${id}`)
                .then(data => {
                    toast.success("you have successfully submitted")
                })
        })
        refetch()
    }
    const handleUser = (id) => {
        const { data, refetch } = useQuery({
            queryKey: ["updates"],
            queryFn: axios.put(`http://localhost:5000/users-role-user/${id}`)
                .then(data => {
                    toast.success("you have successfully submitted")
                })
        })
        refetch()
    }
    return (
        <div>
            <h1 className="mb-10 font-bold text-3xl lg:text-5xl text-center">All Users</h1>
            <div className="mb-5">
                <p className="text-2xl font-bold p-3">Filter By Status</p>
                <select className="select select-ghost border-1 border-gray-300 bg-white w-full " onChange={(e) => setStatus(e.target.value)} required>
                    <option disabled selected>Select status</option>
                    <option value={""}>All</option>
                    <option>active</option>
                    <option>blocked</option>
                </select>
            </div>
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
                                        <td>
                                            {user.role === "Admin" ? "Admin" :
                                                user.role === "volunteer" ? <>
                                                    <Link onClick={() => handleUser(user._id)} className="btn bg-green-500 text-white">Make user</Link>
                                                    <Link onClick={() => handleAdmin(user._id)} className="btn bg-yellow-500 text-white">Make Admin</Link>

                                                </>
                                                    :
                                                    <>
                                                        <Link onClick={() => handleVolunteer(user._id)} className="btn bg-purple-500 text-white">Make Volunteer</Link>
                                                        <Link onClick={() => handleAdmin(user._id)} className="btn bg-yellow-500 text-white">Make Admin</Link>

                                                    </>
                                            }
                                        </td>


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