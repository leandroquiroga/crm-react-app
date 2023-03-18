import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { formValues, validationErrorSchema } from "../helpers";
import { Options } from '../components/Options';
import { OptionsZone, OptionsProvice } from '../helpers/index';
import { Buttons } from "../components/Buttons";
import { Title } from "../components/Title";

export const NewClient: React.FC<{}> = () => {

  return (
    <section className="container flex flex-col justify-center items-center p-3">
      <Title
        title="Carga de centrales"
        styles="text-black mt-3 p-4 text-center text-xl font-semibold "
      />

      <Formik
        initialValues={formValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object(validationErrorSchema)}
      >
        {(formik) => (
          <Form
            noValidate
            className="border-2 shadow-lg flex flex-col w-11/12 justify-center items-center my-4"
          >
            <label htmlFor="code" className="text-center font-bold text-lg">
              Codigo:{" "}
            </label>
            <Field
              name="code"
              type="text"
              className="w-10/12 text-center border-b-2 my-1"
            />
            <ErrorMessage
              name="code"
              component="span"
              className="text-red-600 font-bold text-sm"
            />

            <label htmlFor="zone" className="text-center font-bold text-lg">
              Tipo de Zona:{" "}
            </label>
            <Field
              name="zone"
              as="select"
              className="w-10/12 text-center border-b-2 my-1"
            >
              <Options arrayOptions={OptionsZone} />
            </Field>
            <ErrorMessage
              name="zone"
              component="span"
              className="text-red-600 font-bold text-sm"
            />

            <label htmlFor="geocent" className="text-center font-bold text-lg">
              Central Geografica:{" "}
            </label>
            <Field
              name="geocent"
              type="text"
              className="w-10/12 taext-center border-b-2 my-1 text-center"
            />
            <ErrorMessage
              name="geocent"
              component="span"
              className="text-red-600 font-bold text-sm"
            />

            <label htmlFor="locality" className="text-center font-bold text-lg">
              Localidad:{" "}
            </label>
            <Field
              name="locality"
              type="text"
              className="w-10/12 text-center border-b-2 my-1"
            />
            <ErrorMessage
              name="locality"
              component="span"
              className="text-red-600 font-bold text-sm"
            />

            <label htmlFor="province" className="text-center font-bold text-lg">
              Provincia:{" "}
            </label>
            <Field
              name="province"
              as="select"
              className="w-10/12 text-center border-b-2 my-1"
            >
              <Options arrayOptions={OptionsProvice} />
            </Field>
            <ErrorMessage
              name="province"
              component="span"
              className="text-red-600 font-bold text-sm"
            />

            <Buttons
              options="submit"
              value="Enviar"
              className="bottom-28 bg-cyan-600 text-white p-3 rounded my-2 w-11/12"
            />
            <Buttons
              options="reset"
              value="Reset"
              actions={formik.resetForm}
              className="bottom-28 bg-cyan-600 text-white p-3 rounded my-2 w-11/12"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};
