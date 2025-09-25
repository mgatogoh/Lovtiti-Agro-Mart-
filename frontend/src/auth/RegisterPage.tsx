import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DynamicForm from "../components/common/DynamicForm";
import rawSchema from "../json/auth.json";
import type { AuthSchema, FieldSchema } from "../interface/form";

const formSchema = rawSchema as AuthSchema;

function RegisterPage() {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState<string>("");

    const register: FieldSchema[] = formSchema.register;

    const handleRegister = (values: Record<string, unknown>) => {
        console.log("Form submitted:", values);
        setSuccessMessage("Registered successfully!");
        setTimeout(() => navigate("/login"), 1000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-gray-100 px-4">
            <h1 className="text-3xl font-bold text-gray-800">Register</h1>

            <div className="w-full max-w-md">
                {successMessage ? (
                    <div
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center mb-6"
                        role="alert"
                    >
                        <span className="block sm:inline">{successMessage}</span>
                    </div>
                ) : (
                    <DynamicForm schema={register} onSubmit={handleRegister} />
                )}
            </div>
        </div>
    );
}

export default RegisterPage;
