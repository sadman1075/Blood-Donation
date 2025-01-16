import { Outlet } from "react-router-dom";
import Header from "../Pages/Share/Header/Header";
import Footer from "../Pages/Share/Footer/Footer";

const Layouts = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;