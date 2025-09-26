import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import CartPage from "../pages/CartPage/CartPage";
import Marketplace from "../pages/Marketplace/Marketplace";
import LoginPage from "../auth/LoginPage.tsx";
import Logout from "../auth/Logout.tsx";
import RegisterPage from "../auth/RegisterPage.tsx";


export interface AppRoute {
    path: string;
    name: string;
    Element: React.ComponentType;
}

/**
 * Routes visible to users who are **not** logged in.
 */
export const UNAUTHROUTES: AppRoute[] = [
    {
        path: "/",
        name: "Home",
        Element: Home,
    },
    {
        path: "/marketplace",
        name: "Marketplace",
        Element: Marketplace,
    },
];

/**
 * Routes that every authenticated user (Admin or Staff) can see.
 */
export const COMMON_AUTH_ROUTES: AppRoute[] = [
    {
        path: "/profile",
        name: "Profile",
        Element: Profile,
    },
    {
        path: "/cartpage",
        name: "CartPage",
        Element: CartPage,
    },
    {
        path: "/login",
        name: "LoginPage",
        Element: LoginPage,
    },
    {
        path: "/logout",
        name: "LogoutPage",
        Element: Logout,
    },
    {
        path: "/signup",
        name: "RegisterPage",
        Element: RegisterPage,
    },
];

/**
 * Admin-only routes: all common routes plus the Admin dashboard.
 */
export const ADMIN_ROUTES: AppRoute[] = [
    ...COMMON_AUTH_ROUTES,
    {
        path: "/admin",
        name: "Admin",
        Element: Profile,
    },
];

/**
 * Staff-only routes: all common routes plus the Staff page.
 */
export const STAFF_ROUTES: AppRoute[] = [
    ...COMMON_AUTH_ROUTES,
    {
        path: "/staff",
        name: "Staff",
        Element: CartPage
    }
];
