// Components
import Button from "../Button";

// Styles
import "./PrimaryButton.css";

const PrimaryButton = (props) => {
  const { text, onClick, disabled } = props;

  return (
    <Button
      className="primary-button"
      type="submit"
      text={text}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default PrimaryButton;
