import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "danger" | "success" | "info" | "transparent"; // button types
    size?: "xsmall"| "small" | "medium" | "large";
    disabled?: boolean;
}

const baseStyles =
    "flex items-center justify-center rounded-md font-semibold transition duration-300 focus:outline-none";
const variantStyles = {
    danger: "bg-red-500 text-white hover:bg-red-700",
    success: "bg-green-500 text-white hover:bg-green-700",
    info: "bg-blue-500 text-white hover:bg-blue-700",
    transparent:"bg-transparent"
};
const sizeStyles = {
    xsmall: "px-2 py-1 text-xs",
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           className = "",
                                           variant = "transparent",
                                           size = "small",
                                           disabled = false,
                                       }) => {


    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}  ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            } ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
