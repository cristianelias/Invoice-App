// Components
import Button from "../Button";

// Styles
import "./SecondaryButton.css";

const SecondaryButton = (props) => {
  const { linkTo, text } = props;

  return <Button className="secondary-button" linkTo={linkTo} text={text} />;
};

export default SecondaryButton;
