import { Link } from "react-router-dom"
import styles from "./notFound.module.scss"

function NotFound() {
	return (
		<div className={styles.error404}>
			<h1>404</h1>
			<h2>Oups! La page que vous demandez n'existe pas.</h2>
			<Link to={"/"}>
				<p>Retourner sur la page d'accueil</p>
			</Link>
		</div>
	)
}

export default NotFound
