//import styles from './Buttons.module.scss'

interface ButtonProps {
    onClick: () => void;
    label: string;
  }
  
  const Buttons = ({ onClick, label }: ButtonProps) => {
    return (
      <button onClick={onClick}>{label}</button>
    );
  };
  
  export default Buttons;