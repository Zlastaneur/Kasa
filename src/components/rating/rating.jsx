import { useState } from "react"
import styles from "./rating.module.scss"
import { BiSolidStar } from "react-icons/bi"

function Rating({ rate }) {
	const maxRate = 5

	return (
		<div className={styles.rating}>
			{[...Array(maxRate)].map((_, idx) => {
				return idx < rate ? <BiSolidStar key={idx} className={styles.solidStar} /> : <BiSolidStar key={idx} className={styles.emptyStar} />
			})}
		</div>
	)
}

export default Rating
