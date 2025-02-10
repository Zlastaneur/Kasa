import { Link } from "react-router-dom"
import logements from "../../logements.json"
import styles from "./home.module.scss"
import Banner from "../../components/banner/banner"
import ImgBanner from "../../assets/beach_bg.jpg"

function Home() {
	return (
		<section className={styles.homepage}>
			<Banner text={"Chez vous, partout et ailleurs"} imgSrc={ImgBanner} />
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
