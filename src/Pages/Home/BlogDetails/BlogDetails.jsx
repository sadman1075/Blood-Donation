import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blog=useLoaderData()
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

export default BlogDetails;