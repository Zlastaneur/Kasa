import { Link } from "react-router-dom"
import logements from "../../logements.json"

function Home() {
	return (
		<>
			<ul>
				{logements.map((logement) => (
					<li key={logement.id}>
						<Link to={`/logement/${logement.id}`}>
							<img src={logement.cover} alt="logement" />
							<h3>{logement.title}</h3>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default Home
