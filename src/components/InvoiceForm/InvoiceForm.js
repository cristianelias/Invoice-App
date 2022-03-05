// Dependencies
import styled from "@emotion/styled";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";

// Components
import FieldFactory from "./Fields/FieldFactory";
import FieldsetFrom from "./FieldsetFrom";
import FieldsetTo from "./FieldsetTo";
import FieldsetDetails from "./FieldsetDetails";
import FieldsetCharges from "./FieldsetCharges";

// Data
import inputDataByName from "./utils/inputDataByName";

// Styles
const FormContainer = styled(motion.div)`
  width: 719px;
  min-width: 360px;
  padding: 65px 56px 110px 159px;
  background: #ffffff;
  border-radius: 0px 20px 20px 0px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;

  @media (max-width: 850px) {
    width: 616px;
    padding: 65px 56px 110px 56px;
    top: 80px;
    overflow: hidden;
    overflow-y: scroll;
  }

  @media (max-width: 616px) {
    padding: 32px auto 91px auto;
    width: 100%;
    border-radius: 0px;
  }

  @media (max-width: 500px) {
    padding: 32px 24px 110px 24px;
    margin-top: 0;
    top: 75px;
  }
`;

const Footer = styled.footer`
  width: 719px;
  min-width: 360px;
  background-color: #ffffff;
  border-radius: 0 20px 20px 0;
  position: fixed;
  bottom: 0;
  left: 0px;
  padding: 31px 56px 31px 159px;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  animation: desplazamiento 0.8s ease-out;

  & > .button-component {
    padding: 10px 24px;
  }

  @media (max-width: 850px) {
    width: 616px;
    left: 0px;
    padding: 31px 56px;
  }

  @media (max-width: 616px) {
    width: 100%;
  }

  @media (max-width: 616px) {
    height: 91px;
    padding: 21px 24px 21px 24px;
    border-radius: 0;
  }
`;

const InvoiceForm = ({
  title,
  initialValues,
  submitHandler,
  assembleActions,
  validationSchema,
}) => {
  const createField = ({ name, fieldsetId, index, fields }) => {
    const fieldMeta = inputDataByName[name];

    return (
      <FieldFactory
        key={index}
        name={`${fieldsetId}.${name}`}
        meta={fieldMeta}
        fields={fields}
      />
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => submitHandler({ values })}
      validateOnChange={true}
      validateOnBlur={false}
    >
      {({ values, isSubmitting }) => (
        <>
          <FormContainer
            initial={{ x: "-100vw" }}
            exit={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: "80" }}
          >
            <Form>
              {title}

              <FieldsetFrom values={values} createField={createField} />
              <FieldsetTo values={values} createField={createField} />
              <FieldsetDetails values={values} createField={createField} />
              <FieldsetCharges values={values} createField={createField} />

              <Footer>{assembleActions({ isSubmitting })}</Footer>
            </Form>
          </FormContainer>
        </>
      )}
    </Formik>
  );
};

export default InvoiceForm;
