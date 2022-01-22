// Components
import Button from "../Button";

// Styles
import "./PrimaryButton.css";

const PrimaryButton = (props) => {
  const { text } = props;

  return <Button className="primary-button" text={text} />;
};

export default PrimaryButton;
