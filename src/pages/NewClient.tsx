import * as React from "react";
import { Input, FormGroup } from "@mui/material";
import { Formik } from "formik";

import { InitialValues } from "../interfaces";
import { ErrorValues } from "../interfaces/index";

export const NewClient: React.FC<{}> = () => {
  const initialValues: InitialValues = {
    code: 0,
    zone: "",
    geocent: "",
    locality: "",
    province: "",
  };
  return (
    <section className="container flex flex-col justify-center items-center p-3">
      <h1>Carga de Centrales</h1>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const error: ErrorValues = {};
          if (!values.code) {
            error.code = "El codigo es obligatirio";
          }
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <FormGroup className="border-2 shadow-lg flex flex-col w-11/12 justify-center items-center my-4">
          <label htmlFor="code" className="text-center font-bold text-lg">
            Codigo:{" "}
          </label>
          <Input
            id="code"
            name="code"
            placeholder="Code"
            className="w-10/12"
          />
          <label htmlFor="zone" className="text-center font-bold text-lg">
            Tipo de Zona:{" "}
          </label>
          <Input
            id="zone"
            name="zone"
            placeholder="Tipo de Zona"
            className="w-10/12"
          />
          <label htmlFor="geocent" className="text-center font-bold text-lg">
            Central Geografica:{" "}
          </label>
          <Input
            id="geocent"
            name="geocent"
            placeholder="Central Geografica"
            className="w-10/12"
          />
          <label htmlFor="locality" className="text-center font-bold text-lg">
            Localidad:{" "}
          </label>
          <Input
            id="locality"
            name="locality"
            placeholder="Localidad"
            className="w-10/12"
          />
          <label htmlFor="province" className="text-center font-bold text-lg">
            Provincia:{" "}
          </label>
          <Input
            id="province"
            name="province"
            placeholder="Provincia"
            className="w-10/12"
          />
          <button
            type="submit"
            className="bottom-28 bg-cyan-600 text-white p-3 rounded m-3 w-11/12"
          >
            Submit
          </button>
        </FormGroup>
      </Formik>
    </section>
  );
};
