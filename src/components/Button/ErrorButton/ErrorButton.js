// Components
import Button from "../Button";

// Styles
import "./ErrorButton.css";

const ErrorButton = (props) => {
  const { linkTo, text, onClick } = props;

  return (
    <Button
      className="error-button"
      linkTo={linkTo}
      onClick={onClick}
      text={text}
    />
  );
};

export default ErrorButton;
