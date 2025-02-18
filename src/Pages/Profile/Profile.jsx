import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const Profile = () => {
    const { duser } = useContext(AuthContext)
    const { _id, name, email, image, district, upozila, blood_group } = duser
    const [districts, setdistricts] = useState(null)
    const [upozilas, setupozilas] = useState(null)
    const [isEditable, setIsEditable] = useState(false)
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

    const handleEdit = () => {
        setIsEditable(true)
    }

    const handleUpdateProfile = (e) => {

        e.preventDefault();

        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const image = from.image.value;
        const blood_group = from.blood_group.value;
        const district = from.district.value;
        const upozila = from.upozila.value;
        const updateInfo = {
            name, email, image, blood_group, district, upozila
        }
        console.log(updateInfo);

        const { data } = useQuery({
            queryKey: ["users"],
            queryFn: axios.put(`https://blood-donation-server-hazel-gamma.vercel.app/users/${_id}`, updateInfo)
                .then(data => {
                    if (data.data.acknowledged) {
                        Swal.fire({
                            title: "Good job!",
                            text: "Successfully Updated",
                            icon: "success"
                        });

                        setIsEditable(false)
                    }
                })
        })
    }
    return (
        <div>

            <div>



                <div className="grid justify-center">
                    <div className="avatar ] ">
                        <div className="w-32 rounded-full">
                            <img src={image} />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link onClick={handleEdit} className="btn bg-black text-white">Edit Profile</Link>
                    </div>
                </div>
                <div >
                    <Helmet>
                        <title>Edit Profile | Blood Donation</title>
                    </Helmet>
                    <div className=" ">
                        <div className="flex justify-center">

                        </div>

                        <form className="card-body" onSubmit={handleUpdateProfile}>
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
                                    <input type="text" defaultValue={email} name="email" readOnly value={email} className="input input-bordered lg:w-[500px]" required />

                                </div>
                            </div>
                            <div className="lg:flex justify-center">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    {
                                        isEditable ? <input type="url" defaultValue={image} name="image" className="input input-bordered lg:w-[500px]" required /> :
                                            <input type="url" readOnly defaultValue={image} name="image" className="input input-bordered lg:w-[500px]" required />
                                    }

                                </div>
                            </div>

                            <div className="lg:flex justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    {
                                        isEditable ? <select name="blood_group" defaultValue={blood_group} className="select select-bordered lg:w-[500px]" required>
                                            <option selected>A+</option>
                                            <option>A-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                            <option>O+</option>
                                            <option>O-</option>
                                        </select> :
                                            <input type="text" readOnly defaultValue={blood_group} name="blood_group" className="input input-bordered lg:w-[500px]" required />

                                    }

                                </div>
                            </div>


                            <div className="lg:flex justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> District</span>
                                    </label>
                                    {
                                        isEditable ? <select name="district" defaultValue={district} className="select select-bordered lg:w-[500px]" required>
                                            <option disabled selected>Dhaka</option>

                                            {
                                                districts?.map(district => <option key={district.id}>{district.name}</option>)
                                            }

                                        </select> :
                                            <input type="text" readOnly defaultValue={district} name="district" className="input input-bordered lg:w-[500px]" required />

                                    }


                                </div>
                            </div>


                            <div className="lg:flex justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upozila</span>
                                    </label>
                                    {
                                        isEditable ? <select name="upozila" defaultValue={upozila} className="select select-bordered lg:w-[500px] " required>


                                            {
                                                upozilas?.map(upozila => <option key={upozila.id}>{upozila.name}</option>)
                                            }

                                        </select> :
                                            <input type="text" readOnly defaultValue={upozila} name="upozila" className="input input-bordered lg:w-[500px]" required />

                                    }

                                </div>
                            </div>







                            {
                                isEditable ? <div className="lg:flex justify-center">
                                    <div className=" form-control lg:w-[500px] mt-6 ">
                                        <button className="btn bg-black text-white border-2 border-[#331A15] rancho text-lg ">Update Profile</button>
                                    </div>
                                </div> : ""
                            }



                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;