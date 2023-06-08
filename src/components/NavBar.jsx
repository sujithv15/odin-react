import NavLinks from "./NavLinks.jsx";
import Wrapper from './wrappers/NavBar.jsx'
import {NavLink} from "react-router-dom";

const NavBar = () => {
	return (
		<Wrapper>
			<div className='links'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/rps'>RPS</NavLink>
				<NavLink to='/etch'>Etch-A-Sketch</NavLink>
			</div>
		</Wrapper>
	)
}

export default NavBar