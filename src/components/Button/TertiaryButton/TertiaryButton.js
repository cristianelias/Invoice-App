// Components
import Button from "../Button";

// Styles
import "./TertiaryButton.css";

const TertiaryButton = (props) => {
  const { linkTo, text } = props;

  return <Button className="tertiary-button" linkTo={linkTo} text={text} />;
};

export default TertiaryButton;
