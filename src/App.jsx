import "./styles/app.scss"
import { Routes, Route, Link } from "react-router"
import Home from "./pages/home/index"
import Logement from "./pages/logement/index"
import About from "./pages/about/index"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/logement/:id" element={<Logement />} />
				<Route path="/a-propos" element={<About />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
