
import Wrapper from '../assets/wrappers/NavBar.jsx'
import {NavLink} from "react-router-dom";

const NavBar = () => {
	return (
		<Wrapper>
				<nav className='nav'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/rps'>RPS</NavLink>
				</nav>
		</Wrapper>
	)
}

export default NavBar