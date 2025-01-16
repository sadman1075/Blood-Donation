import { Helmet } from "react-helmet";
import register_lottie from "../../assets/Register_lottie/Animation - 1734093605552.json"
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
const Registration = () => {
    const [districts, setdistricts] = useState(null)
    const [upozilas, setupozilas] = useState(null)
    useEffect(() => {
        fetch("district.json")
            .then(res => res.json())
            .then(data => setdistricts(data))
    }, [])
    useEffect(() => {
        fetch("upozila.json")
            .then(res => res.json())
            .then(data => setupozilas(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Registration | Blood Donation</title>
            </Helmet>
            <div className="hero  min-h-screen pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:w-1/2 ">
                        <Lottie animationData={register_lottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                        <h1 className="text-5xl font-bold mt-4 text-center">Register now!</h1>

                        <form className="card-body" onSubmit={""}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text " name="name" placeholder="Enter your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your Photo Url" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Blood Group</span>
                                </label>
                                <select name="blood_group" className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">District</span>
                                </label>
                                <select name="district" className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Dhaka</option>

                                    {
                                        districts?.map(district => <option key={district._id}>{district.name}</option>)
                                    }

                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upozila</span>
                                </label>
                                <select name="upozila" className="select select-bordered w-full max-w-xs">


                                    {
                                        upozilas?.map(upozila => <option key={upozila._id}>{upozila.name}</option>)
                                    }

                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirm_password" placeholder="Enter your confirm password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Sing Up</button>
                            </div>
                            <div>
                                <p className="text-center text-[#D1A054] text-lg">Already Registered?<Link className="text-blue-500 font-bold">Go to log in</Link></p>
                                <p className="text-center text-lg font-bold mt-2">Or sign up with</p>
                            </div>
                            <div className="flex justify-center gap-4 mt-5">
                                <Link onClick={""}><FcGoogle className="text-5xl" /></Link>
                                <Link><FaFacebook className="text-5xl text-blue-600" /></Link>
                                <Link><FaGithub className="text-5xl text-black" /></Link>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;