import { Link } from "react-router-dom";
import odin from '../assets/images/odin-home.jpg'
import Wrapper from '../components/wrappers/Home.jsx'


const Home = () => {
	return (
		<Wrapper>
			<div className='container'>
				<h1>Sujith Varughese</h1>
				<img src={odin} className='logo' alt='odin-logo'/>
				<h3>Odin Project</h3>
				<p>
					Welcome to the Odin project. In this project, I will be using the fundamentals of React and CSS to design and render apps
				</p>
			</div>
		</Wrapper>

	)
}

export default Home