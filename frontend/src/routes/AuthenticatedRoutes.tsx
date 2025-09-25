import {Outlet} from "react-router-dom";
import AuthenticatedPageWrapper from "../layouts/AuthenticatedPageWrapper.tsx";

const AuthenticatedRoutes =  () => {

    // const isLoggedIn = true
    const isLoggedIn = localStorage.getItem("Profile");

    if (!isLoggedIn) {
        window.location.href = "/login";
    }


    return (
        <AuthenticatedPageWrapper>
            <Outlet/>
        </AuthenticatedPageWrapper>
    )
}

export default AuthenticatedRoutes;