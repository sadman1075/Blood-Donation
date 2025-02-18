import DonarSponser from "../../DonarsSponser/DonarSponser";
import LatestDonationRequests from "../../LatestDonationRequests/LatestDonationRequests";
import Reviews from "../../Reviews/Reviews";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <LatestDonationRequests></LatestDonationRequests>
            <Contact></Contact>
            <Blogs></Blogs>
            <Reviews></Reviews>
            <DonarSponser></DonarSponser>
        </div>
    );
};

export default Home;