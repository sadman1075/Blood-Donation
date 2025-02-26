import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import Swal from "sweetalert2";

const ContentManagement = ({ blog, publishupdate, unpublishupdate, deleteupdate }) => {
    const { _id, image, author, title, date, status } = blog
    const { duser } = useContext(AuthContext)



    const handlePublishStatus = (id) => {
        publishupdate(id)

    }


    const handleUnpublishstatus = (id) => {

        unpublishupdate(id)

    }

    const handleBlogDelete = (id) => {

        deleteupdate(id)


    }

    return (
        <div className=''>
            <div>
                <div className="card card-compact bg-base-100 lg:w-96 lg:h-[440px]  shadow-xl">
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