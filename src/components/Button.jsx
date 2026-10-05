import React from "react";
import { Link } from "react-router-dom";

function Button({ children, to, variant = "primary" }) {
  return (
    <Link to={to} className={`btn ${variant}`}>
      {children}
    </Link>
  );
}

export default Button;