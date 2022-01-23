// Dependencies
// eslint-disable-next-line
import { useNavigate } from "react-router-dom";

// Components
import PrimaryButton from "../../Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Button/SecondaryButton/SecondaryButton";
import TertiaryButton from "../../Button/TertiaryButton/TertiaryButton";

// Styles
import "./InvoiceFormFooter";

const InvoiceFormFooter = (props) => {
  const { isEdit } = props;
  const footerClass = "footer-form";
  const navigate = useNavigate();

  return (
    <div className="invoice-form-footer">
      <div className="invoice-form-footer__spacer"></div>
      {isEdit ? (
        <footer className={footerClass}>
          <TertiaryButton
            onClick={() => navigate(-1, { replace: true })}
            text="Cancel"
          />

          <PrimaryButton
            onClick={() => navigate(-1, { replace: true })}
            text="Save Changes"
          />
        </footer>
      ) : (
        <footer className={footerClass}>
          <TertiaryButton
            onClick={() => navigate(-1, { replace: true })}
            text="Discard"
          />

          <SecondaryButton
            onClick={() => navigate(-1, { replace: true })}
            text="Save as Draft"
          />

          <PrimaryButton
            onClick={() => navigate(-1, { replace: true })}
            text="Save & Send"
          />
        </footer>
      )}
    </div>
  );
};

export default InvoiceFormFooter;
