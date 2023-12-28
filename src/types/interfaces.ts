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
} 

export interface LabelsProps {
  value: string;
  onChange: (value: string) => void;
}

export interface MenuLinkProps {
  children: React.ReactNode;
  to: string;
}