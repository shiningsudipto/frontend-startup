/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Formik, FormikHelpers } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";

interface FormikFormProps<T extends object> {
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
  children: ReactNode;
  className?: string;
  validationSchema?: Yup.Schema<T>;
}

const FormikForm = <T extends object>({
  initialValues,
  onSubmit,
  className,
  children,
  validationSchema,
}: FormikFormProps<T>) => {
  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return <Form className="space-y-5">{children}</Form>;
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
