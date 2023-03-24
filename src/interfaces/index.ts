import { CSSProperties } from "react";

export interface InitialValues {
  code: number;
  zone: string;
  geocent: string;
  locality: string;
  province: string;
}

export interface ErrorValues { 
  code?: string;
  zone?: string;
  geocent?: string;
  locality?: string;
  province?: string;
}


export interface OptionsProps {
  arrayOptions: string[];
}

export interface ButtonsProps {
  options: "button" | "submit" | "reset" | undefined;
  value: string;
  actions?: () => void;
  className?: string; 
}

export interface CardProps {
  key: number;
  localities: InitialValues;
  styles: string; 
  customStyles?: CSSProperties;
}

export interface TitileProps {
  title: string;
  styles: string;
  customStyles?: CSSProperties;
}