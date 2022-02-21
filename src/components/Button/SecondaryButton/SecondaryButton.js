// Components
import Button from "../Button";

// Styles
import "./SecondaryButton.css";

const SecondaryButton = (props) => {
  const { linkTo, text, onClick, disabled } = props;

  return (
    <Button
      className="secondary-button"
      onClick={onClick}
      linkTo={linkTo}
      text={text}
      disabled={disabled}
    />
  );
};

export default SecondaryButton;
