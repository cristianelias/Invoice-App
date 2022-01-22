// Dependencies
// eslint-disable-next-line
import { Link } from "react-router-dom";

// Styles
import "./Button.css";

const Button = (props) => {
  const { className, linkTo, text } = props;

  if (linkTo) {
    return (
      <Link className={`${className} button-component`} to={linkTo}>
        {text}
      </Link>
    );
  }

  return <button className={`${className} button-component`}>{text}</button>;
};

export default Button;
