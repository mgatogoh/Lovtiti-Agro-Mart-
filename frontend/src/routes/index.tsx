import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";
import UnAuthenticatedRoutes from "./UnAuthenticatedRoutes";
import AuthenticatedRoutes from "./AuthenticatedRoutes";

import {
    UNAUTHROUTES,
    ADMIN_ROUTES,
    STAFF_ROUTES,
    type AppRoute,
} from "./routeTables";

const activeUser = {
    name: "Admin",
    email: "",
    role: "STAFF" as "ADMIN" | "STAFF",
};

const USER_AUTH_ROUTES: Record<"ADMIN" | "STAFF", typeof ADMIN_ROUTES> = {
    ADMIN: ADMIN_ROUTES,
    STAFF: STAFF_ROUTES,
};


export default function AppRouter() {
    return (
        <Router>
            <Routes>

                {/* Public/Unauthenticated Routes */}
                <Route element={<UnAuthenticatedRoutes />}>
                    {UNAUTHROUTES.map(({ path, Element, name }: AppRoute) => (
                        <Route key={name} path={path} element={<Element />} />
                    ))}
                </Route>

                {/* Private/Authenticated Routes */}
                <Route element={<AuthenticatedRoutes />}>
                    {USER_AUTH_ROUTES[activeUser.role]?.map(({ path, name, Element }) => (
                        <Route key={name} path={path} element={<Element />} />
                    ))}
                </Route>

                {/* 404 Fallback */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </Router>
    );
}
