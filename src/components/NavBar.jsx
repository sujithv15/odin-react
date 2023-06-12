import NavLinks from "./NavLinks.jsx";
import Wrapper from './wrappers/NavBar.jsx'
import {NavLink} from "react-router-dom";
import svLogo from "../assets/images/sv-logo.jpg";

const NavBar = () => {
	return (
		<Wrapper>
			<div className='nav'>
				<NavLink to='/' className='site-title'><img src={svLogo}/></NavLink>
				<ul>
					<li><NavLink to='/rps' className='links'>RPS</NavLink></li>
					<li><NavLink to='/etch' className='links'>Etch-A-Sketch</NavLink></li>
					<li><NavLink to='/calculator' className='links'>Calculator</NavLink></li>
				</ul>

			</div>
		</Wrapper>
	)
}

export default NavBar