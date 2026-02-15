import { useState } from "react";

type InputFieldProps = {
    label?: string;
    error?: string;
    icon?: string;
    style?: string;
    containerStyle?: string;
    inputStyle?: string;
    secureTextEntry?: boolean;
    value?: string;
    maxLength?: number;
    showCount?: boolean;
    placeholder?: string;
    onRightIconPress?: () => void;
    [key: string]: any;
};

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.027 3.69 12 3.69c4.973 0 9.189 3.286 10.677 7.757a1.125
        1.125 0 010 1.106C21.189 17.024 16.973 20.31 12 20.31c-4.973 0-9.189-3.286-10.677-7.757a1.125 1.125 0
        010-1.106zM12 18.25a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5z" clipRule="evenodd"
        />
    </svg>
);

const EyeOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400">
        <path d="M3.52 2.887a.75.75 0 00-.979 1.125l16.15 16.15a.75.75 0 001.125-.979L3.52 2.887z" />
        <path fillRule="evenodd" d="M14.615 2.195c-.328-.15-.668-.266-1.015-.348a6.723 6.723 0 00-6.101-.632l2.67
        2.67a6.723 6.723 0 017.388 5.485l2.427 2.427c.307-.76.543-1.558.706-2.383a1.125 1.125 0 000-1.106C21.189
        6.976 16.973 3.69 12 3.69c-1.859 0-3.597.674-4.993 1.855L6.084 3.73a11.104 11.104 0 0110.152-.942 10.88 10.88
        0 002.502-.428l-1.045 1.045zM20.31 12.593l-4.524-4.524a6.723 6.723 0 01-5.632-6.101 1.125 1.125 0
        00-.816-.816c-.328-.15-.668-.266-1.015-.348a1.125 1.125 0 00-1.155.195L4.545 4.545a1.125 1.125 0 00-.195
        1.155c.082.347.198.687.348 1.015a11.104 11.104 0 01.942 10.152l-1.045 1.045c-.307.76-.543 1.558-.706 2.383a1.125
        1.125 0 000 1.106c1.488 4.471 5.704 7.757 10.677 7.757 1.859 0 3.597-.674 4.993-1.855l1.411 1.411a11.104 11.104
        0 00-2.317.481c.3-.76.536-1.558.706-2.383a1.125 1.125 0 000-1.106c-.328-.15-.668-.266-1.015-.348a10.88 10.88 0
        00-2.502-.428l1.045-1.045zM12 18.25a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5z" clipRule="evenodd"
        />
    </svg>
);

export function InputField({
                               label,
                               error,
                               icon,
                               style,
                               containerStyle,
                               inputStyle,
                               secureTextEntry,
                               value,
                               maxLength,
                               showCount,
                               placeholder,
                               ...rest
                           }: InputFieldProps) {
    const [isSecure, setIsSecure] = useState(!!secureTextEntry);

    const toggleSecure = () => setIsSecure((s) => !s);

    return (
        <div className={`flex flex-col mb-4 ${containerStyle}`}>
            {label && (
                <label className="text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}

            <div
                className={`flex items-center space-x-2 border border-gray-300 rounded-lg p-2 transition-all 
                duration-200 focus-within:border-blue-500 ${
                    error ? "border-red-500" : ""
                } ${style}`}
            >
                {icon && (
                    <img
                        src={icon}
                        className="w-5 h-5 text-gray-400"
                        alt="Input icon"
                    />
                )}

                <input
                    className={`flex-1 w-full outline-none text-gray-900 bg-transparent placeholder-gray-400 ${inputStyle}`}
                    type={secureTextEntry && isSecure ? "password" : "text"}
                    placeholder={placeholder}
                    value={value}
                    maxLength={maxLength}
                    {...rest}
                />

                {secureTextEntry && (
                    <button
                        type="button"
                        onClick={toggleSecure}
                        className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label={isSecure ? "Show password" : "Hide password"}
                    >
                        {isSecure ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                )}
            </div>

            <div className="flex justify-between items-center mt-1 text-xs">
                {error ? (
                    <span className="text-red-500">{error}</span>
                ) : (
                    <span />
                )}
                {showCount && typeof value === "string" && (
                    <span className="text-gray-500">
                        {`${value.length}${maxLength ? ` / ${maxLength}` : ""}`}
                    </span>
                )}
            </div>
        </div>
    );
}