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