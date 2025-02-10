import { Link, NavLink } from "react-router-dom"
import styles from "./header.module.scss"
import Logo from "../../assets/logo.png"

function Header() {
	return (
		<header className={styles.header}>
			<Link to={"/"}>
				<img src={Logo} alt="Logo Kasa" />
			</Link>
			<ul>
				<li>
					<NavLink className={({ isActive }) => (isActive ? styles.active : "")} to={"/"}>
						Accueil
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? styles.active : "")} to={"/a-propos"}>
						A Propos
					</NavLink>
				</li>
			</ul>
		</header>
	)
}

export default Header
