// Dependencies
// eslint-disable-next-line
import { Link } from "react-router-dom";

// Components
import PrimaryButton from "../../Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Button/SecondaryButton/SecondaryButton";
import TertiaryButton from "../../Button/TertiaryButton/TertiaryButton";

// Styles
import "./InvoiceFormFooter";

const InvoiceFormFooter = (props) => {
  const { isEdit } = props;
  const footerClass = "footer-form";

  return (
    <div className="invoice-form-footer">
      <div className="invoice-form-footer__spacer"></div>
      {isEdit ? (
        <footer className={footerClass}>
          <TertiaryButton linkTo="/" text="Discard" />

          <SecondaryButton linkTo="/" text="Save as Draft" />

          <PrimaryButton linkTo="/" text="Save & Send" />
        </footer>
      ) : (
        <footer className={footerClass}>
          <TertiaryButton linkTo="/" text="Discard" />

          <SecondaryButton linkTo="/" text="Save as Draft" />

          <PrimaryButton linkTo="/" text="Save & Send" />
        </footer>
      )}
    </div>
  );
};

export default InvoiceFormFooter;
