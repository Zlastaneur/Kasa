import { useState } from "react"
import styles from "./carousel.module.scss"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

function Carousel({ data }) {
	const [slide, setSlide] = useState(0)

	const nextSlide = () => {
		setSlide(slide === data.length - 1 ? 0 : slide + 1)
	}
	const prevSlide = () => {
		setSlide(slide === 0 ? data.length - 1 : slide - 1)
	}

	return (
		<>
			<div className={styles.carousel}>
				<BsChevronLeft className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevSlide} />
				{Array.isArray(data) &&
					data.map((picture, idx) => {
						return (
							<img
								src={picture}
								alt={`carousel-${idx}`}
								key={idx}
								className={`${styles.slide} ${slide === idx ? "" : styles.slideHidden}`}
							/>
						)
					})}
				<BsChevronRight className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextSlide} />
			</div>
		</>
	)
}

export default Carousel
