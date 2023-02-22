import { cloneElement } from "react";
import { RadioInputContainer } from "./styles";

interface RadioInputProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  children: React.ReactElement;
  isActive?: boolean;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  id,
  icon,
  children,
  isActive = false,
}) => {
  return (
    <RadioInputContainer htmlFor={id} className={isActive ? "active" : ""}>
      {cloneElement(children, { id, style: { display: "none" } })}
      {icon}
      {label}
    </RadioInputContainer>
  );
};
