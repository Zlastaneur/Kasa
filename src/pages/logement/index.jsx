import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import React from "react"

import logements from "../../logements.json"
import Carousel from "../../components/carousel/carousel"
import Tags from "../../components/tags/tags"
import Rating from "../../components/rating/rating"
import styles from "./logement.module.scss"

import { FaChevronUp } from "react-icons/fa6"

function Logement() {
	const { id } = useParams()
	const [logement, setLogement] = useState({})

	useEffect(() => {
		const selectedLogement = logements.find((item) => item.id === id)
		if (selectedLogement) {
			setLogement(selectedLogement)
		}
	}, [id])

	const [open, setOpen] = useState({})

	const handleOpen = (id) => {
		setOpen((previousState) => ({
			...previousState,
			[id]: !previousState[id],
		}))
	}

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
			<div className={styles.dropdown}>
				<div className={styles.description}>
					<button type="button" onClick={() => handleOpen(0)}>
						Déscription
						<FaChevronUp className={styles.arrow} />
					</button>
					{open[0] ? <p className={styles.open}>{logement.description}</p> : ""}
				</div>
				<div className={styles.equipements}>
					<button type="button" onClick={() => handleOpen(1)}>
						Équipements
						<FaChevronUp className={styles.arrow} />
					</button>
					{open[1] ? (
						<ul className={styles.open}>
							{logement.equipments.map((equipement, index) => (
								<li key={index}>{equipement}</li>
							))}
						</ul>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	)
}

export default Logement
