// Components
import BaseField from "./BaseField";
import InvoiceItemTotalField from "./InvoiceItemTotalField";
import InvoiceSelectField from "./InvoiceSelectField";
import DateField from "./DateField";
import TextInput from "./TextInput";

const FieldFactory = ({ name, meta, fields }) => {
  // TODO: check if we still need this after the complete refactor
  const classes = `field field-${name.replace(".", "-")}`;
  const commonProps = { name, classes, ...meta, fields };

  const fieldsByType = {
    date: <DateField {...commonProps} />,
    select: <InvoiceSelectField {...commonProps} />,
    total: <InvoiceItemTotalField {...commonProps} />,
  };

  return (
    <BaseField {...commonProps}>
      {fieldsByType[meta.type] || <TextInput {...commonProps} />}
    </BaseField>
  );
};

export default FieldFactory;
