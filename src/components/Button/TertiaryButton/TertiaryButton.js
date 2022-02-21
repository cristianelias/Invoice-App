// Components
import Button from "../Button";

// Styles
import "./TertiaryButton.css";

const TertiaryButton = (props) => {
  const { linkTo, text, onClick, disabled } = props;

  return (
    <Button
      className="tertiary-button"
      linkTo={linkTo}
      onClick={onClick}
      text={text}
      disabled={disabled}
    />
  );
};

export default TertiaryButton;
