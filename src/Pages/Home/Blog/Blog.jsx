import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    const { id, image, author, title, date } = blog
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
                        <p>{date}</p>
                        <h2 className="text-xl font-bold">{title}</h2>
                        <div className="card-actions ">
                            <Link to={`/blog-details/${id}`} className="btn bg-white hover:bg-orange-500 hover:text-white border-0 text-orange-500">Read More <FaArrowRight className="text-orange-500" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;