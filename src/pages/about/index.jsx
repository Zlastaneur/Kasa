import { useState } from "react"
import styles from "./about.module.scss"
import Banner from "../../components/banner/banner"
import ImgBanner from "../../assets/mountain_bg.jpg"

function About() {
	const [open, setOpen] = useState({})

	const handleOpen = (id) => {
		setOpen((previousState) => ({
			...previousState,
			[id]: !previousState[id],
		}))
	}

	return (
		<div className={styles.about}>
			<Banner imgSrc={ImgBanner} />
			<div>
				<button type="button" onClick={() => handleOpen(0)}>
					Fiabilité<i></i>
				</button>
				{open[0] ? (
					<p className={styles.open}>
						Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les
						informations sont régulièrements vérifiées par nos équipes.
					</p>
				) : (
					""
				)}

				<button type="button" onClick={() => handleOpen(1)}>
					Respect<i></i>
				</button>
				{open[1] ? (
					<p>
						La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du
						voisinage entraînera une exclusion de la plateforme.
					</p>
				) : (
					""
				)}
				<button type="button" onClick={() => handleOpen(2)}>
					Service<i></i>
				</button>
				{open[2] ? (
					<p>
						La qualité du service est au coeur de notre engagement chez Kasa. nous veillons à ce que chaque interaction, que ce soit avec
						nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
					</p>
				) : (
					""
				)}
				<button type="button" onClick={() => handleOpen(3)}>
					Sécurité<i></i>
				</button>
				{open[3] ? (
					<p>
						La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères
						de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de
						vérifier que les standards sont bien respectées. Nous organisons également des ateliers sur la sécurité domestiques pour nos
						hôtes.
					</p>
				) : (
					""
				)}
			</div>
		</div>
	)
}

export default About
