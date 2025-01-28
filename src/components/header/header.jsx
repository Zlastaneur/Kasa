import { NavLink } from "react-router-dom"
import styles from "./header.module.scss"

function Header() {
	return (
		<header className={styles.header}>
			<img src="./src/assets/logo.png" alt="Logo Kasa" />
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
