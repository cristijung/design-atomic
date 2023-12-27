export interface ButtonProps {
    onClick: () => void;
    label: string;
  }

export interface InputProps {
  value: string | number; //recebendo string ou número
  onChange: (value: string | number) => void;
}  

export interface CardsProps {} //vazia e vou deixar por enquanto