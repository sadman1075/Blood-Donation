import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationerror from "../../../public/error.json"

const Error = () => {
    return (
        <div>
            <div>
                <div className="flex justify-center">

                    <Lottie className='lg:w-1/3 ' animationData={animationerror}></Lottie>


                </div>
                <div className='flex justify-center '>
                    <Link to={"/"} className="btn bg-red-500 text-white font font-semibold mt-5">Go back to home</Link>

                </div>
            </div>
        </div>
    );
};

export default Error;