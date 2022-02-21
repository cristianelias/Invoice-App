// Components
import InvoiceField from "../InvoiceField/InvoiceField";
import InvoiceItemTotalField from "../InvoiceItemTotalField/InvoiceItemTotalField";
import InvoiceSelectField from "../InvoiceSelectField/InvoiceSelectField";
import InvoiceDateField from "../InvoiceDateField/InvoiceDateField";

const InvoiceFieldFactory = (props) => {
  const { name, meta, fields } = props;
  const classes = `field field-${name.replace(".", "-")}`;
  const { type, label, min, max, values, placeholder } = meta;

  const fallback = (
    <InvoiceField
      label={label}
      name={name}
      classes={classes}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
    />
  );

  const fieldsByType = {
    date: (
      <InvoiceDateField
        label={label}
        name={name}
        classes={classes}
        fields={fields}
        values={values}
        placeholder={placeholder}
      />
    ),
    select: (
      <InvoiceSelectField
        label={label}
        name={name}
        classes={classes}
        fields={fields}
        values={values}
        placeholder={placeholder}
      />
    ),
    total: (
      <InvoiceItemTotalField
        label={label}
        name={name}
        classes={classes}
        fields={fields}
        placeholder={placeholder}
      />
    ),
  };

  return fieldsByType[type] || fallback;
};

export default InvoiceFieldFactory;
