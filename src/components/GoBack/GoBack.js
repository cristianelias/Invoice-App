// Dependencies
// eslint-disable-next-line
import { useNavigate } from "react-router-dom";

// Styles
import "./GoBack.css";

// Assets
import iconArrowLeft from "../../assets/icon-arrow-left.svg";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <nav className="go-back">
      <img
        className="invoice__arrow"
        src={iconArrowLeft}
        alt="Arrow icon. Click to go back."
      ></img>

      <button
        className="go-back__button"
        onClick={() => navigate(-1, { replace: true })}
      >
        Go back
      </button>
    </nav>
  );
};

export default GoBack;
