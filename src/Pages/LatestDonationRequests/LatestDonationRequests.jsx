import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LatestDonationRequest from "../LatestDonationRequest/LatestDonationRequest";
import { Link } from "react-router-dom";

const LatestDonationRequests = () => {
    const { data: latestDonation } = useQuery({
        queryKey: ["latestDonation"],
        queryFn: async () => {
            const res = await axios.get("https://blood-donation-server-hazel-gamma.vercel.app/latest-donation-request")
            return res.data;
        }
    })

    return (
        <div className="pt-20 pb-20">
            <div>
                <h1 className="text-center font-bold text-3xl lg:text-5xl">Latest Blood Donation Request Posts</h1>
                <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-2 lg:p-8">

                    {
                        latestDonation?.map(donationRequest => <LatestDonationRequest key={donationRequest._id} donationRequest={donationRequest}></LatestDonationRequest>)
                    }
                </div>
                <Link to={"/donation-request"} className="btn bg-black text-white font-bold">See All</Link>

            </div>
        </div>
    );
};

export default LatestDonationRequests;