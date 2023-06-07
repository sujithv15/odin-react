import links from '../utils/links.jsx'
import { NavLink } from "react-router-dom";

const NavLinks = () => {

	return (
		<div className='nav-links'>
			{links.map(link => {
				const {id, text, path, icon} = link

				return (
					<NavLink to={path} key={id}>
						<span className='icon'>{icon}</span>
						{text}
					</NavLink>
				)
			})}
		</div>
	)


}

export default NavLinks