import { Link } from "react-router-dom";
import blood from "../../../../public/blood.png"

const Benifits = () => {
    return (
        <div className="pt-16 lg:pt-20 " >
            <div className="hero bg-base-100 ">
                <div className="hero-content flex-col lg:flex-row gap-5">

                    <div className="w-full lg:w-1/2 ">
                        <h1 className="text-3xl text-center lg:text-5xl font-bold ">Benefits of Blood Donation</h1>
                        <p className="py-6 text-justify">
                            Blood donation is a selfless act that offers numerous health benefits while saving lives. Regular donation helps maintain a healthy heart by reducing excess iron levels, which can lower the risk of heart disease. It also stimulates the production of new blood cells, keeping the body’s circulatory system active and healthy. Additionally, donors receive a free health check-up, which can help detect potential health issues early. Beyond the personal benefits, blood donation plays a crucial role in medical treatments, aiding patients undergoing surgeries, cancer treatments, and those with blood disorders. By donating blood, individuals contribute to their community, ensuring a stable blood supply for emergencies and saving lives in critical situations.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 lg:ml-10">
                        <img
                            src={blood}
                            className=" rounded-lg w-full lg:h-[500px]  " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benifits;