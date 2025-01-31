import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import logements from "../../logements.json"
import Carousel from "../../components/carousel/carousel"
import Tags from "../../components/tags/tags"
import Rating from "../../components/rating/rating"
import styles from "./logement.module.scss"
import React from "react"

function Logement() {
	const { id } = useParams()
	const [logement, setLogement] = useState({})

	useEffect(() => {
		const selectedLogement = logements.find((item) => item.id === id)
		if (selectedLogement) {
			setLogement(selectedLogement)
		}
	}, [id])

	return (
		<div className={styles.logement}>
			<Carousel data={logement.pictures} />
			<div className={styles.presentation}>
				<div className={styles.infos}>
					<h1>{logement.title}</h1>
					<p className={styles.location}>{logement.location}</p>
					<Tags data={logement.tags} />
				</div>
				<div className={styles.details}>
					{logement.host && (
						<div className={styles.host}>
							<div className={styles.hostName}>
								{logement.host.name.split(" ").map((name, idx) => (
									<React.Fragment key={idx}>
										{name}
										{idx === 0 && <br />}
									</React.Fragment>
								))}
							</div>
							<img src={logement.host.picture} alt={logement.host.name} />
						</div>
					)}
					<Rating data={logement.rating} />
				</div>
			</div>
		</div>
	)
}

export default Logement
