import { ChangeEvent } from "react";
import { InputProps } from "../../../types/interfaces";
//import styles from './Inputs.module.scss';


function Inputs({ value, onChange }: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return <input type="text" value={value} onChange={handleChange} />;
}

export default Inputs;
