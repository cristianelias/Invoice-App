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
const footerHeight = `111px`;
const footerPlusHeader = `191px`;

const FormContainer = styled(motion.div)`
  width: 719px;
  min-width: 375px;
  background: ${({ theme }) => theme.colors.background.formBackground};
  border-radius: 0px 20px 20px 0px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;

  @media (max-width: 850px) {
    width: 616px;
    top: 80px;
  }

  @media (max-width: 616px) {
    border-radius: 0px;
    width: auto;
  }

  @media (max-width: 500px) {
    margin-top: 0;
    top: 75px;
    height: 100vh;
  }
`;

const FormInnerWrapper = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  height: calc(100vh - ${footerHeight});

  padding: 65px 56px 0 159px;

  @media (max-width: 850px) {
    padding-left: 56px;
    height: calc(100vh - ${footerPlusHeader});
  }

  @media (max-width: 500px) {
    padding: 32px 24px 32px 24px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7e88c3;
    outline: 1px solid #f9fafe;
  }
`;

const Footer = styled.footer`
  height: ${footerHeight};
  background-color: ${({ theme }) => theme.colors.background.formBackground};
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  animation: desplazamiento 0.8s ease-out;
  border-top: 1px solid #43434324;

  & > .button-component {
    padding: 10px 24px;
  }

  padding: 0 56px 0 159px;

  @media (max-width: 850px) {
    padding-left: 56px;
  }

  @media (max-width: 500px) {
    padding: 32px 24px 32px 24px;
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    padding: 0 10px;
  }
`;

// Framer motion variants
const animationVariants = {
  here: {
    x: "0",
    transition: {
      type: "spring",
      duration: 0.2,
      stiffness: 100,
    },
  },
  gone: {
    x: "-100vh",
    transition: {
      type: "spring",
      duration: 0.2,
      stiffness: 100,
    },
  },
};

// Custom hooks
import useComponentVisible from "../../hooks/useComponentVisible";

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

const BaseForm = ({
  title,
  initialValues,
  submitHandler,
  assembleActions,
  validationSchema,
  onBlurAction,
}) => {
  const { refComponent, isComponentVisible } = useComponentVisible(true);

  if (!isComponentVisible) {
    onBlurAction();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => submitHandler({ values })}
      validateOnChange={true}
      validateOnBlur={false}
    >
      {({ values, isSubmitting, errors, touched }) => (
        <>
          <FormContainer
            variants={animationVariants}
            initial="gone"
            animate="here"
            exit="gone"
            ref={refComponent}
          >
            <Form>
              <FormInnerWrapper>
                {title}

                <FieldsetFrom values={values} createField={createField} />
                <FieldsetTo values={values} createField={createField} />
                <FieldsetDetails values={values} createField={createField} />
                <FieldsetCharges
                  values={values}
                  createField={createField}
                  errors={errors}
                  touched={touched}
                />
              </FormInnerWrapper>
              <Footer>{assembleActions({ isSubmitting, values })}</Footer>
            </Form>
          </FormContainer>
        </>
      )}
    </Formik>
  );
};

export default BaseForm;
