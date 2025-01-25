
import { Helmet } from "react-helmet";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";

const AddFunding = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway)

    return (
        <div>
            <div className="pt-20 lg:pt-32">
                <div >
                    <Helmet>
                        <title>Give Funding | Blood Donation</title>
                    </Helmet>
                    <div className=" ">
                        <div>
                            <h1 className="text-4xl font-bold rancho text-center pt-8">Give Funding</h1>
                            <h1 className="text-lg  text-center pt-6 px-2 lg:px-10">
                                We urgently need blood donors to help save lives! Your donation can make a critical difference for patients in need of surgeries, accidents, or medical treatments. All blood types are welcome, especially O-negative. The process is simple, safe, and takes just 30 minutes of your time. </h1>
                        </div>
                        <Elements stripe={stripePromise}>
                            <CheckOutFrom></CheckOutFrom>
                        </Elements>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddFunding;