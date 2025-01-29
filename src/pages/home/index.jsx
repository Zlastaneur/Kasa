import { Link } from "react-router-dom"
import logements from "../../logements.json"
import styles from "./home.module.scss"

function Home() {
	return (
		<section className={styles.homepage}>
			<div>
				<p>Chez vous, partout et ailleurs</p>
			</div>
			<ul>
				{logements.map((logement) => (
					<li key={logement.id}>
						<Link to={`/logement/${logement.id}`}>
							<img src={logement.cover} alt="logement" />
							<p>{logement.title}</p>
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Home
