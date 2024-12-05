import React from "react";

interface ButtonProps {
  name: string;
  type: string;
  icon: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ name, type, icon }) => {
  return (
    <button className={`${type}`}>
      <div className="flex items-center">
        <p>{name}</p>
        <div>{icon}</div>
      </div>
    </button>
  );
};

export default Button;
