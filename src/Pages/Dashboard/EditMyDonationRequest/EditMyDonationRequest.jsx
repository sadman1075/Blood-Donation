import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AuthContext from "../../../Context/AuthContext";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";


const EditMyDonationRequest = () => {
    const [districts, setdistricts] = useState(null)
    const [upozilas, setupozilas] = useState(null)
    const navigate=useNavigate()
    const information=useLoaderData()
    const { _id, recipient, district, upozila, hospital_name, address, blood_group, date, time, message, name, email, status } = information

    const [startDate, setStartDate] = useState(new Date());
    const ms = startDate.getTime();
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch("/district.json")
            .then(res => res.json())
            .then(data => setdistricts(data))
    }, [])
    useEffect(() => {
        fetch("/upozila.json")
            .then(res => res.json())
            .then(data => setupozilas(data))
    }, [])

    const handleUpdateDonationRequest = (e) => {
        e.preventDefault();
        const from = e.target;
        const recipient = from.recipient.value;
        const district = from.district.value;
        const upozila = from.upozila.value;
        const hospital_name = from.hospital_name.value;
        const address = from.address.value;
        const blood_group = from.blood_group.value;
        const date = ms;
        const time = from.time.value;
        const message = from.message.value;
        const name = from.name.value;
        const email = from.email.value;
        const status = "pending"

        const updateDonationInfo = {
            _id,recipient, district, upozila, hospital_name, address, blood_group, date, time, message, name, email, status
        }

        const {data}=useQuery({
            queryKey:["updates"],
            queryFn:axios.put(`http://localhost:5000/donation-request-update-details/${_id}`,updateDonationInfo)
            .then(data=>{
                if(data.data.acknowledged){
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully Updated",
                        icon: "success"
                      });
                      navigate(-1)
                    
                }
            })
        })
    }
    return (
        <div>
            <div className="">
                <div >
                    <Helmet>
                        <title>Edit blood donation request | Blood Donation</title>
                    </Helmet>
                    <div className=" ">
                        <div>
                            <h1 className="text-4xl font-bold rancho text-center pt-8">Edit Blood Donation Request</h1>
                            <h1 className="text-lg  text-center pt-6 px-2 lg:px-10">
                                We urgently need blood donors to help save lives! Your donation can make a critical difference for patients in need of surgeries, accidents, or medical treatments. All blood types are welcome, especially O-negative. The process is simple, safe, and takes just 30 minutes of your time. </h1>
                        </div>
                        <form className="card-body" onSubmit={handleUpdateDonationRequest}>

                            <div className="lg:flex justify-center">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Recipient Name</span>
                                    </label>
                                    <input type="text" name="recipient" defaultValue={recipient} placeholder="Enter your recipient name" className="input input-bordered lg:w-[500px]" required />
                                </div>
                            </div>
                            <div className="lg:flex justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Recipient District</span>
                                    </label>
                                    <select name="district" defaultValue={district} className="select select-bordered lg:w-[500px]" required>
                                        <option disabled selected>Dhaka</option>

                                        {
                                            districts?.map(district => <option key={district.id}>{district.name}</option>)
                                        }

                                    </select>

                                </div>
                            </div>


                            <div className="lg:flex justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upozila</span>
                                    </label>
                                    <select name="upozila" defaultValue={upozila} className="select select-bordered lg:w-[500px] " required>


                                        {
                                            upozilas?.map(upozila => <option key={upozila.id}>{upozila.name}</option>)
                                        }

                                    </select>
                                </div>
                            </div>
                            <div className="lg:flex justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Hospital Name</span>
                                    </label>
                                    <input type="text" defaultValue={hospital_name} name="hospital_name" placeholder="Enter description" className="input input-bordered lg:w-[500px]" required />

                                </div>
                            </div>

                            <div className="lg:flex justify-center">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Address</span>
                                    </label>
                                    <input type="text" name="address" defaultValue={address} placeholder="Enter your full address(e.g., Zahir Raihan Rd, Dhaka) " className="input input-bordered lg:w-[500px]" required />
                                </div>
                            </div>
                            <div className="lg:flex justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    <select name="blood_group" defaultValue={blood_group} className="select select-bordered lg:w-[500px]" required>
                                        <option  selected>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                    </select>
                                </div>
                            </div>

                            <div className="lg:flex justify-center">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Date </span>
                                    </label>
                                    <DatePicker defaultValue={date} className="input input-bordered w-full lg:w-[500px]" name="date" selected={startDate} onChange={(date) => setStartDate(date)} required />

                                </div>
                            </div>

                            <div className="lg:flex justify-center">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Donation Time</span>
                                    </label>
                                    <input aria-label="Time" defaultValue={time} name="time" className="input input-bordered lg:w-[500px]" type="time" required />

                                </div>
                            </div>
                            <div className="lg:flex justify-center">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Request Message</span>
                                    </label>
                                    <input type="text" name="message" defaultValue={message} placeholder="Enter your full address(e.g., Zahir Raihan Rd, Dhaka) " className="input input-bordered lg:w-[500px]" required />

                                </div>
                            </div>
                            <div className="lg:flex justify-center">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" defaultValue={name} name="name" value={name} className="input input-bordered lg:w-[500px]" required />

                                </div>
                            </div>
                            <div className="lg:flex justify-center">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" defaultValue={email} name="email" value={email} className="input input-bordered lg:w-[500px]" required />

                                </div>
                            </div>
                            <div className="lg:flex justify-center">
                                <div className=" form-control lg:w-[500px] mt-6 ">
                                    <button className="btn bg-black text-white border-2 border-[#331A15] rancho text-lg ">Update Donation Request</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EditMyDonationRequest;