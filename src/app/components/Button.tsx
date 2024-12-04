import React from "react";

interface ButtonProps {
  name: string;
  type: string;
  icon: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ name, type, icon }) => {
  return (
    <button className={`${type}`}>
      <div className="flex items-center">
        <p>{name}</p>
        {icon}
      </div>
    </button>
  );
};

export default Button;
