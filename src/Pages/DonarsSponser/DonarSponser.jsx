import Marquee from "react-fast-marquee";
import d1 from "../../../public/d1.jpg"
import d2 from "../../../public/d2.jpg"
import d3 from "../../../public/d3.jpg"
import d4 from "../../../public/d4.jpg"
import d5 from "../../../public/d5.jpg"
import d6 from "../../../public/d6.jpg"
import d7 from "../../../public/d7.jpg"

const DonarSponser = () => {
    return (
        <div className="pt-20 pb-20">
            <h1 className="text-3xl lg:text-5xl font-bold text-center mt-6 mb-20">Blood Donations</h1>
            <Marquee>
                <div className="flex gap-8">
                    <img className="h-60 w-60" src={d1} alt=""  />
                    <img className="h-60 w-60" src={d2} alt=""  />
                    <img className="h-60 w-60" src={d3} alt=""  />
                    <img className="h-60 w-60" src={d4} alt=""  />
                    <img className="h-60 w-60" src={d5} alt=""  />
                    <img className="h-60 w-60" src={d6} alt=""  />
                    <img className="h-60 w-60" src={d7} alt=""  />
                </div>
            </Marquee>
        </div>
    );
};

export default DonarSponser;