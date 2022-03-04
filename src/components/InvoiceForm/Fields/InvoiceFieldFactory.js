// Components
import BaseField from "./BaseField";
import InvoiceItemTotalField from "./InvoiceItemTotalField";
import InvoiceSelectField from "./InvoiceSelectField";
import DateField from "./DateField";

const InvoiceFieldFactory = (props) => {
  const { name, meta, fields } = props;
  const classes = `field field-${name.replace(".", "-")}`;
  const { type, label, min, max, values, placeholder } = meta;

  const fallback = (
    <BaseField
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
      <DateField
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
