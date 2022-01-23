// Components
import Button from "../Button";

// Styles
import "./PrimaryButton.css";

const PrimaryButton = (props) => {
  const { text, onClick } = props;

  return <Button className="primary-button" text={text} onClick={onClick} />;
};

export default PrimaryButton;
