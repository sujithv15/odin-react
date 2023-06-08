import { Link } from "react-router-dom";
import svLogo from '../assets/images/sv-logo.jpg'
import Wrapper from '../components/wrappers/Home.jsx'


const Home = () => {
	return (
		<>
			<div className='container'>
				<h1>Sujith Varughese</h1>
				<img src={svLogo} height='320' width='320' alt='sv-logo'/>
				<h3>Odin Project</h3>
				<p>
					Welcome to the Odin project. In this project, I will be using the fundamentals of React and CSS to design and render apps
				</p>
			</div>
		</>

	)
}

export default Home