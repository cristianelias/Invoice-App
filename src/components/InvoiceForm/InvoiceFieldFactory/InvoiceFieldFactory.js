// Components
import InvoiceField from "../InvoiceField/InvoiceField";
import InvoiceItemTotalField from "../InvoiceItemTotalField/InvoiceItemTotalField";
import InvoiceSelectField from "../InvoiceSelectField/InvoiceSelectField";

const InvoiceFieldFactory = (props) => {
  const { name, meta, fields } = props;
  const classes = `field field-${name.replace(".", "-")}`;
  const { type, label, min, max, values } = meta;

  const fallback = (
    <InvoiceField
      label={label}
      name={name}
      classes={classes}
      type={type}
      min={min}
      max={max}
    />
  );

  const fieldsByType = {
    select: (
      <InvoiceSelectField
        label={label}
        name={name}
        classes={classes}
        fields={fields}
        values={values}
      />
    ),
    total: (
      <InvoiceItemTotalField
        label={label}
        name={name}
        classes={classes}
        fields={fields}
      />
    ),
  };

  return fieldsByType[type] || fallback;
};

export default InvoiceFieldFactory;
