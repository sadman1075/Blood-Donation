import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blog = useLoaderData()

    const { image, author, title, date, content, statistics } = blog

 



    return (
        <div className="pt-16 lg:pt-20 max-w-7xl mx-auto">
            <div className='lg:flex justify-center items-center gap-20  mb-10 '>
                <div className='w-full lg:w-1/2'>
                    <img src={image} className="rounded-2xl" alt="" />

                    <div className="flex items-center gap-5 justify-center mt-4">
                        <div className="flex items-center gap-2">
                            <FaEye className="text-xl text-blue-400" />
                            <p>{statistics.views}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FcLike
                                className="text-xl" />
                            <p>{statistics.like}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaShareFromSquare
                                className="text-xl text-blue-600" />
                            <p>{statistics.shares}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mt-5'>
                    <p className="text-[#749B3F] p-2  w-60 text-center bg-lime-100 rounded-xl ">{author}</p>
                    <h1 className='text-3xl lg:text-5xl p-2  font-bold'>{title}</h1>

                    <p className='mt-5 text-justify p-2'>{content}</p>
                    <p className=' text-justify px-2'><b>date:</b> {date}</p>

                    <div className=' flex items-center gap-3'>


                    </div>
                    <div className='mt-5 lg:flex gap-4 justify-center'>
                        <Link className='btn w-full lg:w-1/3   bg-[#C19A6B] text-black p-2 mt-6'> <FaHeart className='text-gray-500' />
                            Love</Link>
                        <Link to={-1}  className='btn w-full lg:w-1/3 bg-orange-500 p-2 hover:bg-orange-500 text-white mt-6'> <IoArrowBackCircle />

                            back</Link>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default BlogDetails;