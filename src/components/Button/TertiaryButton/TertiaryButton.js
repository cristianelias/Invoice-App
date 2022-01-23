// Components
import Button from "../Button";

// Styles
import "./TertiaryButton.css";

const TertiaryButton = (props) => {
  const { linkTo, text, onClick } = props;

  return (
    <Button
      className="tertiary-button"
      linkTo={linkTo}
      onClick={onClick}
      text={text}
    />
  );
};

export default TertiaryButton;
