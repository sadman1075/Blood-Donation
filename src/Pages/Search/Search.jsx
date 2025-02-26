import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    const [districts, setdistricts] = useState(null)
    const [upozilas, setupozilas] = useState(null)
    const [upozila, setUpozila] = useState("")
    const [district, setDistrict] = useState("")
    const [blood_group, setBloodGroup] = useState("")
    const [allInformation, setAllInformation] = useState(null)
    console.log(district);

    const handleSearch = () => {
        console.log("me");
        axios.get(`https://blood-donation-server-hazel-gamma.vercel.app/donar-information?blood_group=${blood_group}&district=${district}&upozila=${upozila}`)
            .then(data => setAllInformation(data.data))
    }

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
    return (
        <div className="pt-16 lg:pt-20">
            <p className="text-3xl lg:text-5xl font-bold p-3 text-center">Filter For Blood (Search)</p>

            <div className="lg:flex justify-center gap-10">
                <div className="mt-3">
                    <select name="blood_group" onChange={(e) => setBloodGroup(e.target.value)} className="select select-bordered w-full lg:w-[300px]" required>
                        <option selected value={""}>Select Blood Group</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </div>
                <div>
                    <select name="district" onChange={(e) => setDistrict(e.target.value)} className="mt-3 select select-bordered w-full lg:w-[300px]" required>
                        <option selected value={""}>Select District</option>

                        {
                            districts?.map(district => <option key={district.id}>{district.name}</option>)
                        }

                    </select>
                </div>
                <div>
                    <select name="upozila" onChange={(e) => setUpozila(e.target.value)} className=" mt-3 select select-bordered w-full lg:w-[300px] " required>

                        <option selected value={""}>Select Upozila</option>

                        {
                            upozilas?.map(upozila => <option key={upozila.id}>{upozila.name}</option>)
                        }

                    </select>
                </div>

            </div>
            <div className="flex justify-center mt-5">
                <Link onClick={handleSearch} className="btn bg-black text-white" >Search</Link>
            </div>
            <div className="max-w-7xl mx-auto">
                <h1 className="mb-10 mt-10 font-bold text-3xl lg:text-5xl text-center">Blood Donar Information </h1>
                {
                    allInformation?.length == 0 ? <p className="text-center font-bold  lg:text-5xl text-red-400 mb-10">There is no  blood donar at this moment</p> :


                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>Donar Name</th>
                                        <th>Donar Email</th>
                                        <th>Blood Group</th>
                                        <th>District</th>
                                        <th>Upozila</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allInformation?.map(donationinfo => <tr key={donationinfo._id}>


                                            <td>{donationinfo.name}</td>
                                            <td>{donationinfo.email}</td>
                                            <td>{donationinfo.blood_group}</td>
                                            <td>{donationinfo.district}</td>
                                            <td>{donationinfo.upozila}</td>


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

export default Search;