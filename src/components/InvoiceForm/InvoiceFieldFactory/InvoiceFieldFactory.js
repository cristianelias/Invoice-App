// Components
import InvoiceField from "../InvoiceField/InvoiceField";

const InvoiceFieldFactory = (props) => {
  const { text, name, classes } = props;

  return <InvoiceField text={text} name={name} classes={classes} />;
};

export default InvoiceFieldFactory;
