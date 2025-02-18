import { format } from "date-fns";
import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllDonationRequestDetails = () => {
    const alldonationinfo = useLoaderData();
    const navigate = useNavigate()
    const { user, duser } = useContext(AuthContext)

    const { _id, recipient, district, upozila, hospital_name, address, blood_group, date, time, message, name, email, status } = alldonationinfo
    const handleDonate = () => {
        document.getElementById('my_modal_1').showModal()

    }

    const handlestatus = () => {
        const { data } = useQuery({
            queryKey: ["updates"],
            queryFn: axios.put(`https://blood-donation-server-hazel-gamma.vercel.app/donation-request-details/${_id}`)
                .then(data => {
                    toast.success("you have successfully submitted")
                })
        })

    }

    const handleDonarInfo = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const donar_id = _id
        const district = duser.district;
        const upozila = duser.upozila
        const donarinformation = {
            donar_id,
            name,
            email,
            blood_group,
            district,
            upozila
        }

        axios.post("https://blood-donation-server-hazel-gamma.vercel.app/donar-information", donarinformation)
            .then(data => console.log(data))

        navigate(-1)
    }

    return (
        <div className="pt-20 lg:pt-32">
            <div className="card bg-base-100 w-full lg:w-3/4 mx-auto shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-4xl mb-8">All Information!</h2>
                    <p className="mb-3"><b>Recipient Name:</b> {recipient}</p>
                    <p className="mb-3"><b>District:</b> {district}</p>
                    <p className="mb-3"><b>Upozila:</b> {upozila}</p>
                    <p className="mb-3"><b>Address:</b> {address}</p>
                    <p className="mb-3"><b>Blood Group:</b> {blood_group}</p>
                    <p className="mb-3"><b>Hospital Name:</b> {hospital_name}</p>
                    <p className="mb-3"><b>Date:</b> {format(new Date(date), "P")}</p>
                    <p className="mb-3"><b>Message:</b> {message}</p>
                    <p className="mb-3"><b>Posted By: </b> {name}</p>
                    <p className="mb-3"><b>Posted Email:</b> {email}</p>






                    <div className="card-actions justify-between">
                        <Link to={-1} className="btn bg-black text-white">Back</Link>
                        <button onClick={handleDonate} className="btn bg-red-500 text-white">Donate Now</button>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box ">
                    <h3 className="font-bold text-lg">Donar</h3>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-lg btn-circle btn-ghost absolute text-red-500 right-2 top-2">✕</button>
                    </form>
                    <form className="card-body" onSubmit={handleDonarInfo}>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Donar Name</span>
                            </label>
                            <input type="text" name="name" readOnly value={user?.displayName} className="input input-bordered w-full" required />

                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Donar Email</span>
                            </label>
                            <input type="text" name="email" readOnly value={user?.email} className="input input-bordered w-ful" required />

                        </div>

                        <div className=" form-control  mt-6 ">
                            <button onClick={handlestatus} className="btn bg-black text-white border-2 border-[#331A15] rancho text-lg ">Submit</button>
                        </div>
                    </form>
                    <div className="modal-action">

                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AllDonationRequestDetails;