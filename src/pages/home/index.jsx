import { Link } from "react-router-dom"
import logements from "../../logements.json"
import styles from "./home.module.scss"
import { useState, useEffect } from "react"

function Home() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 480)

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => {
				const ismobile = window.innerWidth < 480
				if (ismobile !== isMobile) setIsMobile(ismobile)
			},
			false
		)
	}, [isMobile])

	return (
		<section className={styles.homepage}>
			<div>
				{isMobile ? (
					<p>
						Chez vous,<br></br> partout et ailleurs
					</p>
				) : (
					<p>Chez vous, partout et ailleurs</p>
				)}
			</div>
			<ul>
				{logements.map((logement) => (
					<Link to={`/logement/${logement.id}`} key={logement.id}>
						<li>
							<img src={logement.cover} alt="logement" />
							<p>{logement.title}</p>
						</li>
					</Link>
				))}
			</ul>
		</section>
	)
}

export default Home
