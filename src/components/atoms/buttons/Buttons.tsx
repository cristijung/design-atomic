import styles from './Buttons.module.scss'
import { ButtonProps } from '../../../types/interfaces';
  
  const Buttons = ({ onClick, label }: ButtonProps) => {
    return (
      <button onClick={onClick} className={styles.btn}>{label}</button>
    );
  };
  
  export default Buttons;