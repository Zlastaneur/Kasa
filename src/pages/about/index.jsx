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

	const sections = [
		{
			id: 0,
			title: "Fiabilité",
			content:
				"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
		},
		{
			id: 1,
			title: "Respect",
			content:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de la plateforme.",
		},
		{
			id: 2,
			title: "Service",
			content:
				"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
		},
		{
			id: 3,
			title: "Sécurité",
			content:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.",
		},
	]

	const ToggleSection = ({ id, title, content, isOpen, handleOpen }) => (
		<div>
			<button type="button" onClick={() => handleOpen(id)}>
				{title}
				<i></i>
			</button>
			{isOpen ? <p className={styles.open}>{content}</p> : ""}
		</div>
	)

	return (
		<div className={styles.about}>
			<Banner imgSrc={ImgBanner} />
			{sections.map((section) => (
				<ToggleSection
					key={section.id}
					id={section.id}
					title={section.title}
					content={section.content}
					isOpen={open[section.id]}
					handleOpen={handleOpen}
				/>
			))}
		</div>
	)
}

export default About
