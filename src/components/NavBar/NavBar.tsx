import styles from './NavBar.module.css'
import Logo from '../../assets/Icons/Logo.png'
import Perfil from '../../assets/Icons/User.png'
import Calendar from '../../assets/Icons/Calendar.png'

function NavBar() {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.logo} src={Logo} alt="Logo" />
                <span>Início</span>
                <span>Sobre</span>
                <span>Contato</span>
            </div>
            <div>
                <a href="#">
                     <img src={Perfil} alt="Perfil do usuário" className={styles.userImg} />
                </a>
                <span>Área do Paciente</span>
                <button className={styles.agendeBtn}>
                    <img src={Calendar} alt="Ícone de calendário" className={styles.calendarIcon} />
                    AGENDE AQUI!
                </button>
            </div>
        </div>
    )
}

export default NavBar