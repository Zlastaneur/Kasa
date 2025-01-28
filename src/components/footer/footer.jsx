import styles from "./footer.module.scss"

function Footer() {
	return (
		<footer className={styles.footer}>
			<img src="./src/assets/logo_white.png" alt="Logo Kasa" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer
