import { useEffect, useState } from "react";
import ContentManagement from "./ContentManagement";
import { Link } from "react-router-dom";

const ContentManagements = () => {
    const [blogs, setBlogs] = useState(null)
    useEffect(() => {
        fetch("http://localhost:5000/blog")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])
    return (
        <div className="">
            <h1 className="text-5xl font-bold text-center mb-20">Blogs</h1>
            <div className="flex justify-end pb-6 mr-5 lg:mr-10">
                <Link className="btn bg-black text-white" to={"/dashboard/add-blog"}>Add Blog</Link>

            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    blogs?.map(blog => <ContentManagement key={blog.id} blog={blog}></ContentManagement>)
                }
            </div>
        </div>
    );
};

export default ContentManagements;