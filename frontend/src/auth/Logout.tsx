import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("Profile"); // or localStorage.clear();
        navigate("/login");
    }, [navigate]);

    return <p className="text-center mt-10 text-gray-500">Logging out...</p>;
}

export default Logout;
