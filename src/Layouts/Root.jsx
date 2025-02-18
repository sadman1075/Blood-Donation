import { Outlet } from "react-router-dom";
import Header from "../Pages/Share/Header/Header";
import Footer from "../Pages/Share/Footer/Footer";
import { useState } from "react";

const Layouts = () => {
    const [active, setActive] = useState({
        status: true,
        element: "light"

    })

    const handleMode = (element) => {
        if (element == "light") {
            setActive({
                status: true,
                element: "light"
            })
        }
        else {
            setActive({
                status: false,
                element: "dark"
            })
        }
    }

    return (
        <div className="max-w-7xl mx-auto" data-theme={`${active.status ? "light" : "dark"}`} >
            <Header handleMode={handleMode} active={active}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;