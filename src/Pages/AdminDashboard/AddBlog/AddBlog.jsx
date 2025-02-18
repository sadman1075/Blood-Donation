import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AddBlog = () => {
    const [startDate, setStartDate] = useState(new Date());


    const handleAddBlog = (e) => {
        e.preventDefault();
        const from = e.target;
        const author = from.author.value;
        const image = from.photo.value;
        const title = from.title.value;
        const content = from.content.value;
        const date = from.date.value;
        const statistics = {
            views: "400",
            like: "300",
            shares: "45"
        }
        const status = "draft"
        const AddBlog = {
            author, image, title, content, date, statistics, status
        }

        const { data } = useQuery({
            queryKey: ["blogs"],
            queryFn: axios.post("https://blood-donation-server-hazel-gamma.vercel.app/blog", AddBlog)
                .then(data => {
                    if (data.data.acknowledged) {
                        Swal.fire({
                            title: "Good job!",
                            text: "You have successfully created blog",
                            icon: "success"
                        });
                    }
                    from.reset()
                })
        }
        )
    }
    return (
        <div className="">
            <div >
                <Helmet>
                    <title>Add Blog | Blood Donation</title>
                </Helmet>
                <div className=" ">
                    <div>
                        <h1 className="text-4xl font-bold rancho text-center pt-8">Add Blog</h1>
                        <h1 className="text-lg  text-center pt-6 px-2 lg:px-10">
                            We urgently need blood donors to help save lives! Your donation can make a critical difference for patients in need of surgeries, accidents, or medical treatments. All blood types are welcome, especially O-negative. The process is simple, safe, and takes just 30 minutes of your time. </h1>
                    </div>
                    <form className="card-body" onSubmit={handleAddBlog}>

                        <div className="lg:flex justify-center">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Author</span>
                                </label>
                                <input type="text" name="author" placeholder="Enter Author Name" className="input input-bordered lg:w-[500px]" required />

                            </div>
                        </div>

                        <div className="lg:flex justify-center">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="url" name="photo" placeholder="Enter you image url " className="input input-bordered lg:w-[500px]" required />
                            </div>
                        </div>
                        <div className="lg:flex justify-center">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Enter Title " className="input input-bordered lg:w-[500px]" required />

                            </div>
                        </div>
                        <div className="lg:flex justify-center">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Content</span>
                                </label>
                                <textarea
                                    placeholder="write content"
                                    name="content"
                                    className="textarea textarea-bordered textarea-lg w-full lg:w-[500px]"></textarea>
                            </div>
                        </div>


                        <div className="lg:flex justify-center">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Date </span>
                                </label>
                                <DatePicker className="input input-bordered w-full lg:w-[500px]" name="date" selected={startDate} onChange={(date) => setStartDate(date)} required />

                            </div>
                        </div>



                        <div className="lg:flex justify-center">
                            <div className=" form-control lg:w-[500px] mt-6 ">
                                <button className="btn bg-black text-white border-2 border-[#331A15] rancho text-lg ">Add Blog</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddBlog;