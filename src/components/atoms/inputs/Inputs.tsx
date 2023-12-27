import { ChangeEvent } from "react";
//import styles from './Inputs.module.scss';

interface InputProps {
  value: string | number; //recebendo string ou número
  onChange: (value: string | number) => void;
}

function Inputs({ value, onChange }: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return <input type="text" value={value} onChange={handleChange} />;
}

export default Inputs;
