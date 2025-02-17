import React from "react"
import { FaChevronUp } from "react-icons/fa6"

const DropdownBtn = ({ id, label, content, isOpen, handleOpen, styles }) => (
	<div className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}>
		<button type="button" onClick={() => handleOpen(id)} className={isOpen ? styles.open : ""}>
			{label}
			<FaChevronUp className={styles.arrow} />
		</button>
		<div className={styles.content} style={{ maxHeight: isOpen ? "500px" : "0" }}>
			{content}
		</div>
	</div>
)

export default DropdownBtn
