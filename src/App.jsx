import "./App.scss"
import { Routes, Route, Link } from "react-router"
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import About from "./pages/About"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="logement/:id" element={<Logement />} />
				<Route path="a-propos" element={<About />} />
			</Routes>
		</>
	)
}

export default App
