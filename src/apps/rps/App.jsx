import './App.css'
import rock from './assets/images/rock.jpg'
import paper from './assets/images/paper.jpeg'
import scissors from './assets/images/scissors.jpg'
import {useState} from "react";

const App = () => {

	const [player, setPlayer] = useState('')
	const [cpu, setCpu] = useState('')

	const options = [rock, paper, scissors]


	const runCPU = () => {
		console.log('CPU thinking...')
		const rand = Math.floor(Math.random() * 2)
		setTimeout(() => {}, 3000)
		setCpu(prev => options[rand])
		console.log(cpu)
	}

	const handleClick = (option) => {
		setPlayer(option)
		console.log(player)
		runCPU()
	}


	return (
		<>
			<div>
				<h2>Rock, Paper, Scissors</h2>
			</div>
			<div className='game'>
				<div className='player'>Player
					<img src={player} alt='p1-image'/>
				</div>

				<div className='cpu'>CPU
					<img src={cpu} alt='cpu-image'/>
				</div>
			</div>


			<button onClick={()=>handleClick(rock)}>Rock</button>
			<button onClick={()=>handleClick(paper)}>Paper</button>
			<button onClick={()=>handleClick(scissors)}>Scissors</button>
		</>
	)

}
export default App