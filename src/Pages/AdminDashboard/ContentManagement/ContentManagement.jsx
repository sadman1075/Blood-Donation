import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";

const ContentManagement = ({ blog }) => {
    const { _id, image, author, title, date, status } = blog
    const { duser } = useContext(AuthContext)



    const handlePublishStatus = (id) => {

        const { data } = useQuery({
            queryKey: ["blog-publish"],
            queryFn: axios.put(`http://localhost:5000/blog-publish/${id}`)
                .then(data => console.log(data.data))
        })

    }
    const handleUnpublishstatus = (id) => {

        const { data } = useQuery({
            queryKey: ["blog-unpublish"],
            queryFn: axios.put(`http://localhost:5000/blog-unpublish/${id}`)
                .then(data => console.log(data.data))
        })

    }

    const handleBlogDelete = (id) => {
        const { data } = useQuery({
            queryKey: ["blog-delete"],
            queryFn: axios.delete(`http://localhost:5000/blog/${id}`)
                .then(data => console.log(data.data))
        })
    }

    return (
        <div className=''>
            <div>
                <div className="card card-compact bg-base-100 lg:w-96 shadow-xl">
                    <figure>
                        <img
                            src={image}
                            className="h-60 rounded-xl"
                            alt="" />

                    </figure>
                    <div className="card-body">
                        <h1 className="text-xl font-bold">{author}</h1>
                        <p>{date}</p>
                        <h2 className="text-xl font-bold">{title}</h2>
                        <div className="card-actions ">
                            {
                                duser.role == "Admin" ?
                                    status === "published" ?
                                        <>
                                            <Link onClick={() => handleUnpublishstatus(_id)} className="btn bg-emerald-500 text-white">Unpublish</Link>
                                            <Link onClick={() => handleBlogDelete(_id)} className="btn bg-red-500 text-white">Delete</Link>
                                        </>
                                        :
                                        <>
                                            <Link onClick={() => { handlePublishStatus(_id) }} className="btn bg-black text-white">Publish</Link>
                                            <Link onClick={() => handleBlogDelete(_id)} className="btn bg-red-500 text-white">Delete</Link>
                                        </> : ""


                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContentManagement;