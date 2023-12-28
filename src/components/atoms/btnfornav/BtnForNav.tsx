import { Link } from 'react-router-dom';
import { MenuLinkProps } from '../../../types/interfaces';
import styles from './BtnForNav.module.scss';

export default function BtnForNav({ children, to}: MenuLinkProps) {   

    return(
        <>
        <Link className={styles.btn} to={to}>
            {children}
        </Link>        
        </>
    )
}