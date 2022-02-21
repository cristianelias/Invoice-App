// Dependencies
import { Link } from "react-router-dom";

// Styles
import "./Button.css";

const Button = (props) => {
  const { className, linkTo, text, onClick, type, disabled } = props;

  if (linkTo) {
    return (
      <Link className={`${className} button-component`} to={linkTo}>
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={`${className} button-component`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
