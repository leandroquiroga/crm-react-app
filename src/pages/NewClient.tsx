import { useFormik } from "formik";
import * as Yup from "yup";

import { formValues, validationErrorSchema } from "../helpers";

export const NewClient: React.FC<{}> = () => {
  const {
    handleSubmit,
    handleChange,
    handleReset,
    values,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: formValues,
    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: Yup.object(validationErrorSchema),
  });
  return (
    <section className="container flex flex-col justify-center items-center p-3">
      <h1>Carga de Centrales</h1>
      <form
        noValidate
        onSubmit={handleSubmit}
        className="border-2 shadow-lg flex flex-col w-11/12 justify-center items-center my-4"
      >
        <label htmlFor="code" className="text-center font-bold text-lg">
          Codigo:{" "}
        </label>
        <input
          id="code"
          name="code"
          maxLength={4}
          placeholder="Code"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.code}
          className="w-10/12 text-center border-b-2 my-1"
        />
        {touched.code && errors.code && (
          <span className="text-red-600 font-bold text-sm">{errors.code}</span>
        )}
        <label htmlFor="zone" className="text-center font-bold text-lg">
          Tipo de Zona:{" "}
        </label>
        <input
          id="zone"
          name="zone"
          placeholder="Tipo de Zona"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.zone}
          className="w-10/12 text-center border-b-2 my-1"
        />
        {touched.zone && errors.zone && (
          <span className="text-red-600 font-bold text-sm">{errors.zone}</span>
        )}
        <label htmlFor="geocent" className="text-center font-bold text-lg">
          Central Geografica:{" "}
        </label>
        <input
          id="geocent"
          name="geocent"
          placeholder="Central Geografica"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.geocent}
          className="w-10/12 text-center border-b-2 my-1"
        />
        {touched.geocent && errors.geocent && (
          <span className="text-red-600 font-bold text-sm">
            {errors.geocent}
          </span>
        )}
        <label htmlFor="locality" className="text-center font-bold text-lg">
          Localidad:{" "}
        </label>
        <input
          id="locality"
          name="locality"
          placeholder="Localidad"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.locality}
          className="w-10/12 text-center border-b-2 my-1"
        />
        {touched.locality && errors.locality && (
          <span className="text-red-600 font-bold text-sm">
            {errors.locality}
          </span>
        )}
        <label htmlFor="province" className="text-center font-bold text-lg">
          Provincia:{" "}
        </label>
        <input
          id="province"
          name="province"
          placeholder="Provincia"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.province}
          className="w-10/12 text-center border-b-2 my-1"
        />
        {touched.province && errors.province && (
          <span className="text-red-600 font-bold text-sm">
            {errors.province}
          </span>
        )}
        <button
          type="submit"
          className="bottom-28 bg-cyan-600 text-white p-3 rounded my-2 w-11/12"
        >
          Submit
        </button>{" "}
        <button
          onClick={handleReset}
          type="reset"
          className="bottom-28 bg-cyan-600 text-white p-3 rounded my-2 w-11/12"
        >
          Reset
        </button>
      </form>
    </section>
  );
};
