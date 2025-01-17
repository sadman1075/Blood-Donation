import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState(null)
    useEffect(() => {
        fetch("http://localhost:5000/blog")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])
    return (
        <div className="pt-20 lg:pt-32">
            <h1 className="text-5xl font-bold text-center mb-20">Blogs</h1>

            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    blogs?.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;