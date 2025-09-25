import { useCallback, type MouseEvent, type ReactNode } from "react";

interface ButtonProps {
    children?: ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children = "Buy", onClick }: ButtonProps) {
    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            onClick?.(event);
        },
        [onClick]
    );

    return (
        <button
            type="button"
            onClick={handleClick}
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
        >
            {children}
        </button>
    );
}

export default Button;
