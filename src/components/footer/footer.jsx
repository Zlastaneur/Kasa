import { Link } from "react-router-dom"
import styles from "./footer.module.scss"
import Logo from "../../assets/logo_white.png"

function Footer() {
	return (
		<footer className={styles.footer}>
			<Link to={"/"}>
				<img src={Logo} alt="Logo Kasa" />
			</Link>
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer
