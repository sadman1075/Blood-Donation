import { Outlet } from "react-router-dom";
import Header from "../Pages/Share/Header/Header";
import Footer from "../Pages/Share/Footer/Footer";

const Layouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;