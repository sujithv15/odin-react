import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";
import NavBar from './NavBar.jsx'
import Wrapper from "./wrappers/SharedLayout.jsx";

const SharedLayout = () => {
	return (
		<Wrapper>
			<header>

			</header>

			<nav>
				<NavBar/>
			</nav>

			<main>
				<Outlet />
			</main>

			<footer>

			</footer>

		</Wrapper>
	)
}

export default SharedLayout