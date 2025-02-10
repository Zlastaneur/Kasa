import styles from "./banner.module.scss"

function Banner({ text, imgSrc }) {
	return (
		<div className={styles.banner}>
			<img src={imgSrc} alt="" />
			{text && <p>{text}</p>}
		</div>
	)
}

export default Banner
