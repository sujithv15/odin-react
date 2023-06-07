import {Rps, EtchSketch} from "../apps";
import Home from '../Home.jsx'
const links = [
	{
		id: 1,
		text: 'home',
		path: '/',
		icon: <Home />,
	},
	{
		id: 2,
		text: 'rock-paper-scissor',
		path: 'rock-paper-scissor',
		icon: <Rps />,
	},
	{
		id: 3,
		text: 'etch-sketch',
		path: 'etch-sketch',
		icon: <EtchSketch />,
	},
];

export default links;