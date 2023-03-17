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


export const OptionsZone: string[] = ['', 'Baja', 'Media', 'Alta'];
export const OptionsProvice: string[] = [
  '',
  'GRAN BUENOS AIRES',
  'GRAN BUENOS AIRES EXTRA AMBA',
  'BUENOS AIRES',
  'JUJUY',
  'SALTA',
  'FORMOSA',
  'MISIONES',
  'CORRIENTES',
  'SANTA FE',
  'CORDOBA',
  'SGO. DEL ESTERO',
  'CATAMARCA',
  'LA RIOJA',
  'TUCUMAN',
  'SAN LUIS',
  'SAN JUAN',
  'ETRE RIOS',
  'LA PAMPA',
  'MENDOZA',
  'NEUQUEN',
  'RIO NEGRO', 
  'CHUBUT',
  'SANTA CRUZ',
  'TIERRA DEL FUEGO',
]