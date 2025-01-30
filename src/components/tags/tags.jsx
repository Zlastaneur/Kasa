import styles from "./tags.module.scss"

function Tags({ data }) {
	return (
		<>
			<div className={styles.tags}>
				{Array.isArray(data) &&
					data.map((tag, idx) => {
						return (
							<p className={styles.tag} key={idx}>
								{tag}
							</p>
						)
					})}
			</div>
		</>
	)
}

export default Tags
