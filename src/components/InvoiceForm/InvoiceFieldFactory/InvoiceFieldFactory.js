// Components
import InvoiceField from "../InvoiceField/InvoiceField";
import CalculatedInvoiceField from "../CalculatedInvoiceField/CalculatedInvoiceField";

const InvoiceFieldFactory = (props) => {
  const {
    text,
    name,
    classes,
    type,
    placeholder,
    multiplicand,
    multiplier,
  } = props;

  const fallback = (
    <InvoiceField
      text={text}
      name={name}
      classes={classes}
      placeholder={placeholder}
    />
  );

  const fieldsByType = {
    calculated: (
      <CalculatedInvoiceField
        text={text}
        name={name}
        classes={classes}
        placeholder={placeholder}
        multiplicand={multiplicand}
        multiplier={multiplier}
      />
    ),
  };

  return fieldsByType[type] || fallback;
};

export default InvoiceFieldFactory;
