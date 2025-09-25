import UnAuthenticatedPageWrapper from "../layouts/UnAuthenticatedPageWrapper.tsx";
import {Outlet} from "react-router-dom";

const UnAuthenticatedRoutes =  () => {
    return (
        <UnAuthenticatedPageWrapper>
            <Outlet />
        </UnAuthenticatedPageWrapper>
    )
}

export default UnAuthenticatedRoutes;