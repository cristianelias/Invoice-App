// Components
import Button from "../Button";

// Styles
import "./ErrorButton.css";

const ErrorButton = (props) => {
  const { linkTo, text } = props;

  return <Button className="error-button" linkTo={linkTo} text={text} />;
};

export default ErrorButton;
