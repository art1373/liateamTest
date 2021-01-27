import React from "react";
import "./Button.scss";

const Button = ({ title, onClick }) => {
  return <span className="button">{title}</span>;
};

export default Button;
