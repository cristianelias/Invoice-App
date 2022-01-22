// Dependencies
// eslint-disable-next-line
import { useNavigate } from "react-router-dom";

// Styles
import "./GoBack.css";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <button className="go-back" onClick={() => navigate(-1, { replace: true })}>
      Go back
    </button>
  );
};

export default GoBack;
