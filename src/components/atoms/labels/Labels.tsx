//import styles from './Labels.module.scss;'
import { LabelsProps } from "../../../types/interfaces";
import { ChangeEvent } from "react";

export default function Labels({ value, onChange }: LabelsProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      <label>
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </>
  );
}

//verificar se a passagem está ok
//estou colocando ele para montar o componente cards

