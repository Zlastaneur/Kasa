import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import React from "react"

import logements from "../../logements.json"
import Carousel from "../../components/carousel/carousel"
import Tags from "../../components/tags/tags"
import Rating from "../../components/rating/rating"
import DropdownBtn from "../../components/dropdownBtn/dropdownBtn"
import styles from "./logement.module.scss"

function Logement() {
	const { id } = useParams()
	const [logement, setLogement] = useState({})
	let navigate = useNavigate()

	useEffect(() => {
		const selectedLogement = logements.find((item) => item.id === id)
		if (selectedLogement) {
			setLogement(selectedLogement)
		} else {
			navigate("logement-inexistant")
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
					<Rating rate={logement.rating} />
				</div>
			</div>
			<div className={styles.dropdown}>
				<DropdownBtn
					id={0}
					label="Description"
					content={<p>{logement.description}</p>}
					isOpen={open[0]}
					handleOpen={handleOpen}
					styles={styles}
				/>
				<DropdownBtn
					id={1}
					label="Équipements"
					content={<ul>{logement.equipments && logement.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)}</ul>}
					isOpen={open[1]}
					handleOpen={handleOpen}
					styles={styles}
				/>
			</div>
		</div>
	)
}

export default Logement
