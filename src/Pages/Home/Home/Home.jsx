import DonarSponser from "../../DonarsSponser/DonarSponser";
import LatestDonationRequests from "../../LatestDonationRequests/LatestDonationRequests";
import Reviews from "../../Reviews/Reviews";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Benifits from "../Benifits/Benifits";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <About></About>
                <Benifits></Benifits>
                <LatestDonationRequests></LatestDonationRequests>
                <Contact></Contact>
                <Blogs></Blogs>
                <Reviews></Reviews>
                <DonarSponser></DonarSponser>
            </div>
        </div>
    );
};

export default Home;