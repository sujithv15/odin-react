import {Rps, EtchSketch, Home} from "../pages";

const links = [
	{
		id: 1,
		text: 'Home',
		path: '/',
		icon: <Home />,
	},
	{
		id: 2,
		text: 'Rock, Paper, Scissors',
		path: '/rps',
		icon: <Rps />,
	},
	{
		id: 3,
		text: 'etch-sketch',
		path: '/etch',
		icon: <EtchSketch />,
	},
];

export default links;