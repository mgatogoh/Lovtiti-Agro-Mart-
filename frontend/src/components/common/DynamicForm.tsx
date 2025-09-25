import { useState, type ChangeEvent, type FormEvent } from "react";

export type FieldType =
    | "text"
    | "textarea"
    | "password"
    | "select"
    | "checkbox";

export interface FieldSchema {
    name: string;
    label: string;
    type: FieldType;
    required?: boolean;
    placeholder?: string;
    options?: string[]; // for select
    defaultValue?: string | boolean;
}

export type FormValues = Record<string, string | boolean>;

interface DynamicFormProps {
    schema: FieldSchema[];
    onSubmit: (values: FormValues) => void;
    submitLabel?: string;
}

const baseInput =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500";

export default function DynamicForm({
                                        schema,
                                        onSubmit,
                                        submitLabel = "Submit",
                                    }: DynamicFormProps) {
    // initialize state with defaults
    const initialState: FormValues = schema.reduce((acc, field) => {
        acc[field.name] =
            field.type === "checkbox"
                ? Boolean(field.defaultValue)
                : (field.defaultValue as string) ?? "";
        return acc;
    }, {} as FormValues);

    const [values, setValues] = useState<FormValues>(initialState);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setValues((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(values);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-6 rounded-xl shadow-md"
        >
            {schema.map((field) => (
                <div key={field.name} className="flex flex-col">
                    <label htmlFor={field.name} className="mb-1 font-medium text-gray-700">
                        {field.label}
                        {field.required && <span className="text-red-500"> *</span>}
                    </label>

                    {field.type === "text" || field.type === "password" ? (
                        <input
                            id={field.name}
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                            value={values[field.name] as string}
                            onChange={(e) => handleChange(e)}
                            className={baseInput}
                        />
                    ) : field.type === "textarea" ? (
                        <textarea
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                            value={values[field.name] as string}
                            onChange={(e) => handleChange(e)}
                            className={`${baseInput} h-24 resize-none`}
                        />
                    ) : field.type === "select" ? (
                        <select
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            value={values[field.name] as string}
                            onChange={(e) => handleChange(e)}
                            className={baseInput}
                        >
                            <option value="">Select...</option>
                            {field.options?.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    ) : field.type === "checkbox" ? (
                        <label className="inline-flex items-center space-x-2">
                            <input
                                id={field.name}
                                type="checkbox"
                                name={field.name}
                                checked={values[field.name] as boolean}
                                onChange={(e) => handleChange(e)}
                                className="h-4 w-4 text-green-600 border-gray-300 rounded"
                            />
                            <span className="text-gray-700">{field.label}</span>
                        </label>
                    ) : null}
                </div>
            ))}

            <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
            >
                {submitLabel}
            </button>
        </form>
    );
}
