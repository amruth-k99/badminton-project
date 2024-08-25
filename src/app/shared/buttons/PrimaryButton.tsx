"use client";
import React from "react";

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  label: string;
  icon?: React.ReactNode;
};

const PrimaryButton = ({
  label,
  onClick,
  className = "",
  disabled = false,
  loading = false,
  type = "button",
  icon,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={(r) => !loading && onClick && onClick(r)}
      className={`block w-full my-auto cursor-pointer py-3 px-4 rounded-md duration-200 shadow focus:outline-none focus:ring-2 text-white focus:none ${className} ${disabled ? "bg-gray-400" : "bg-black"}`}
    >
      {!!icon && icon}
      <span className="my-auto uppercase">{label}</span>
      {loading && (
        <span className="animate-spin inline-block w-4 h-4 ml-2 my-auto border-[3px] border-current border-t-transparent rounded-full"></span>
      )}
    </button>
  );
};

export default PrimaryButton;
