import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import logements from "../../logements.json"

function Logement() {
	const { id } = useParams()
	const [logement, setLogement] = useState({})

	useEffect(() => {
		const selectedLogement = logements.find((item) => item.id === id)
		if (selectedLogement) {
			setLogement(selectedLogement)
		}
	}, [id])

	return <>{logement.title && <h1>{logement.title}</h1>}</>
}

export default Logement
