import { NavLink } from "react-router-dom"
import logements from "../logements.json"

function Home() {
	return (
		<>
			<ul>
				{logements.map((logement) => (
					<li key={logement.id}>
						<NavLink to={`logement/${logement.id}`}>
							<img src={logement.cover} alt="logement" />
							<h3>{logement.title}</h3>
						</NavLink>
					</li>
				))}
			</ul>
		</>
	)
}

export default Home
