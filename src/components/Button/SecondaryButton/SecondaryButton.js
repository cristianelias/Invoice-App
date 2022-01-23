// Components
import Button from "../Button";

// Styles
import "./SecondaryButton.css";

const SecondaryButton = (props) => {
  const { linkTo, text, onClick } = props;

  return (
    <Button
      className="secondary-button"
      onClick={onClick}
      linkTo={linkTo}
      text={text}
    />
  );
};

export default SecondaryButton;
