//import styles from './Cards.module.scss;'
import { useState } from "react";
import { CardsProps } from "../../../types/interfaces";
import Buttons from "../../atoms/buttons/Buttons";
import Inputs from "../../atoms/inputs/Inputs";
import Labels from "../../atoms/labels/Labels";

//aqui vai o código de exemplo de uso dos componentes:
//- Inputs e Buttons -- sem nada estilizado por enquanto
function Cards({ initialValue }: CardsProps) {
  const [inputValue, setInputValue] = useState<string | number>("");
  const [cardValue, setCardValue] = useState<string | number>(initialValue);

  const handleInputChange = (value: string | number) => {
    setInputValue(value);
  };
  const handleButtonClick = () => {
    console.log("Botão clicado");
  };
  const handleLabelsChange = (value: string) => {
    setCardValue(value);
  };

  return (
    <>
      <div>
        <Labels value="text" onChange={handleLabelsChange} />
        <p>Card Value: {cardValue}</p>
        <Inputs value={inputValue} onChange={handleInputChange} />
        <Buttons onClick={handleButtonClick} label="Clique aqui" />
        <p>Valor: {inputValue}</p>
      </div>
    </>
  );
}

export default Cards;
