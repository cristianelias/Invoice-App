// Dependencies
// eslint-disable-next-line
import { Link } from "react-router-dom";

// Components
import PrimaryButton from "../../Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Button/SecondaryButton/SecondaryButton";
import TertiaryButton from "../../Button/TertiaryButton/TertiaryButton";

// Styles
import "./NewInvoiceFormFooter";

const NewInvoiceFormFooter = () => {
  return (
    <div>
      <div className="five-fields-container__spacer"></div>
      <footer className="footer-form">
        <TertiaryButton linkTo="/" text="Discard" />

        <SecondaryButton linkTo="/" text="Save as Draft" />

        <PrimaryButton linkTo="/" text="Save & Send" />
      </footer>
    </div>
  );
};

export default NewInvoiceFormFooter;
