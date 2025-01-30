import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import logements from "../../logements.json"
import Carousel from "../../components/carousel/carousel"
import Tags from "../../components/tags/tags"
import styles from "./logement.module.scss"

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
			{<Carousel data={logement.pictures} />}
			{<h1>{logement.title}</h1>}
			{<p className={styles.location}>{logement.location}</p>}
			{<Tags data={logement.tags} />}
		</div>
	)
}

export default Logement
