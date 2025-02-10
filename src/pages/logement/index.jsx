import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import React from "react"

import logements from "../../logements.json"
import Carousel from "../../components/carousel/carousel"
import Tags from "../../components/tags/tags"
import Rating from "../../components/rating/rating"
import styles from "./logement.module.scss"

import { FaChevronUp } from "react-icons/fa6"

const DetailBtn = ({ id, label, content, isOpen, handleOpen }) => (
	<div className={styles.wrapper}>
		<button type="button" onClick={() => handleOpen(id)} className={isOpen ? styles.open : ""}>
			{label}
			<FaChevronUp className={styles.arrow} />
		</button>
		<div className={styles.content} style={{ maxHeight: isOpen ? "500px" : "0" }}>
			{content}
		</div>
	</div>
)

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
				<DetailBtn id={0} label="Description" content={<p>{logement.description}</p>} isOpen={open[0]} handleOpen={handleOpen} />
				<DetailBtn
					id={1}
					label="Équipements"
					content={<ul>{logement.equipments && logement.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)}</ul>}
					isOpen={open[1]}
					handleOpen={handleOpen}
				/>
			</div>
		</div>
	)
}

export default Logement
