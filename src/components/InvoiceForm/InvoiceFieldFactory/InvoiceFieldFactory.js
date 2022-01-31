// Components
import InvoiceField from "../InvoiceField/InvoiceField";
import ItemTotalInvoiceField from "../ItemTotalInvoiceField/ItemTotalInvoiceField";

const InvoiceFieldFactory = (props) => {
  const { name, meta, placeholder, fields } = props;
  const classes = `field field-${name.replace(".", "-")}`;
  const { type, label } = meta;

  const fallback = (
    <InvoiceField
      label={label}
      name={name}
      placeholder={placeholder}
      classes={classes}
    />
  );

  const fieldsByType = {
    total: (
      <ItemTotalInvoiceField
        label={label}
        name={name}
        placeholder={placeholder}
        classes={classes}
        fields={fields}
      />
    ),
  };

  return fieldsByType[type] || fallback;
};

export default InvoiceFieldFactory;
