import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";

const DashboardInfo = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <h1 className="text-center font-bold text-3xl lg:text-5xl">Welcome, {user?.displayName}</h1>
        </div>
    );
};

export default DashboardInfo;