import styles from './MenuBar.module.scss'
import BtnForNav from "../../atoms/btnfornav/BtnForNav"

export default function MenuBar() {
    return(
        <>
        <div className={styles.menu}>
        <BtnForNav to='/'>Home</BtnForNav>
        <BtnForNav to='/galeria'>Galeria</BtnForNav>
        <BtnForNav to='/contato'>Contato</BtnForNav>       
        <BtnForNav to='/'>Menu1</BtnForNav>       
        <BtnForNav to='/'>Menu2</BtnForNav>       
        <BtnForNav to='/'>Menu3</BtnForNav>       
        <BtnForNav to='/'>Menu4</BtnForNav>       
        <BtnForNav to='/'>Menu5</BtnForNav>       
        </div>
        </>
    )
}