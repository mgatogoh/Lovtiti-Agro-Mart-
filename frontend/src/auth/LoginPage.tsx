import { useNavigate, Link } from "react-router-dom";
import DynamicForm from "../components/common/DynamicForm";
import rawAuth from "../json/auth.json";
import type { AuthSchema, FieldSchema } from "../interface/form";

const auth = rawAuth as AuthSchema;

function LoginPage() {
    const navigate = useNavigate();
    const login: FieldSchema[] = auth.login;

    const handleLogin = (values: Record<string, unknown>) => {
        localStorage.setItem("Profile", JSON.stringify(values));
        navigate("/profile");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-gray-100 px-4">
            <h1 className="text-3xl font-bold text-gray-800">Login</h1>

            <div className="w-full max-w-md">
                <DynamicForm schema={login} onSubmit={handleLogin} />
            </div>

            {/* ➕  Sign-up link */}
            <p className="text-gray-600 text-sm">
                Don’t have an account?{" "}
                <Link
                    to="/signup"
                    className="text-green-700 font-semibold hover:underline"
                >
                    Sign Up
                </Link>
            </p>
        </div>
    );
}

export default LoginPage;
