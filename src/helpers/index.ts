import * as Yup from "yup";
import { InitialValues } from "../interfaces";

export const validationErrorSchema = {
  code: Yup.number().required("El codigo de la central es obligatorio"),
  zone: Yup.string().required("El tipo de zona es requerida"),
  geocent: Yup.string().required("Central Geografica es requerida"),
  locality: Yup.string().required("La localidad es requerida"),
  province: Yup.string().required("La provicia es requerida"),
};

export const formValues: InitialValues = {
  code: 0,
  zone: "",
  geocent: "",
  locality: "",
  province: "",
};
