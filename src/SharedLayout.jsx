import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";
import NavBar from "./components/index.jsx";

const SharedLayout = () => {
	return (
		<div className='shared-layout'>
			<header>
				<NavBar/>
			</header>

			<main>
				<Outlet />
			</main>

		</div>
	)
}

export default SharedLayout