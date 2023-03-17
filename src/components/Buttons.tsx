import { ButtonsProps } from "../interfaces/index";

export const Buttons = ({
  options,
  value,
  actions,
  className,
}: ButtonsProps): JSX.Element => {
  return (
    <button type={options} className={className} onClick={actions}>
      {value}
    </button>
  );
};
