export interface ButtonProps {
    onClick: () => void;
    label: string;
  }

export interface InputProps {
  value: string | number; //recebendo string ou número
  onChange: (value: string | number) => void;
}  

export interface CardsProps {
  initialValue: string;
} //vazia e vou deixar por enquanto

export interface LabelsProps {
  value: string;
  onChange: (value: string) => void;
}