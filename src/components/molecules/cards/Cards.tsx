//import styles from './Cards.module.scss;'
import { useState } from "react";
import Buttons from "../../atoms/buttons/Buttons";
import Inputs from "../../atoms/inputs/Inputs";
// import Labels from "../../atoms/labels/Labels";

//aqui vai o código de exemplo de uso dos componentes:
//- Inputs e Buttons -- sem nada estilizado por enquanto

interface CardsProps {}

function Cards(props: CardsProps) {
  const [inputValue, setInputValue] = useState<string | number>("");
  const handleInputChange = (value: string | number) => {
    setInputValue(value);
  };
  const handleButtonClick = () => {
    console.log('Botão clicado');
  }

  return (
    <>
      <div>
        <Inputs value={inputValue} onChange={handleInputChange} />
        <Buttons onClick={handleButtonClick} label="Clique aqui" />
        <p>Valor: {inputValue}</p>
      </div>
    </>
  );
}

export default Cards;
