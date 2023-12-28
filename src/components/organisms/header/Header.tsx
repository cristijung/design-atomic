import MenuBar from '../../molecules/menubar/MenuBar'
import styles from './Header.module.scss'

export default function Header() {
    return(
        <>
       <header className={styles.header}>
        <div className={styles.title}>Aqui vai o título da aplicação</div>        
       </header>
       <MenuBar/>
        </>
    )
}