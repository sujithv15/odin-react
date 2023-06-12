import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";
import NavBar from './NavBar.jsx'
import Wrapper from "./wrappers/SharedLayout.jsx";

const SharedLayout = () => {
	return (
		<Wrapper>

			<header>
				<NavBar/>
			</header>

			<main>
				<Outlet />
			</main>

			<footer>
				<p>&copy; 2023 Sujith Varughese</p>
			</footer>

		</Wrapper>
	)
}

export default SharedLayout