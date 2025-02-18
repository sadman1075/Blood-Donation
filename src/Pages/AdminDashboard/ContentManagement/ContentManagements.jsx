import { useEffect, useState } from "react";
import ContentManagement from "./ContentManagement";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ContentManagements = () => {
    const [blogs, setBlogs] = useState(null)


    const { data, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => fetch("https://blood-donation-server-hazel-gamma.vercel.app/blog")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    })

    const publishupdate = (id) => {
        axios.put(`https://blood-donation-server-hazel-gamma.vercel.app/blog-publish/${id}`)
            .then(data => {
                refetch()
                toast.success("you have successfully publish")
            })
    }

    const unpublishupdate = (id) => {
        axios.put(`https://blood-donation-server-hazel-gamma.vercel.app/blog-unpublish/${id}`)
            .then(data => {
                refetch()
                toast.success("you have successfully unpublish")
            })
    }
    const deleteupdate = (id) => {

        axios.delete(`https://blood-donation-server-hazel-gamma.vercel.app/blog/${id}`)
            .then(data => {
                refetch()
                toast.success("you have successfully deleted")


            })


    }


    return (
        <div className="">
            <h1 className="text-5xl font-bold text-center mb-20">Blogs</h1>
            <div className="flex justify-end pb-6 mr-5 lg:mr-10">
                <Link className="btn bg-black text-white" to={"/dashboard/add-blog"}>Add Blog</Link>

            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    blogs?.map(blog => <ContentManagement key={blog.id} deleteupdate={deleteupdate} unpublishupdate={unpublishupdate} publishupdate={publishupdate} blog={blog}></ContentManagement>)
                }
            </div>
        </div>
    );
};

export default ContentManagements;