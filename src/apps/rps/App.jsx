import './App.css'
import rock from './assets/images/rock.jpg'
import paper from './assets/images/paper.jpeg'
import scissors from './assets/images/scissors.jpg'
import {useState} from "react";


const App = () => {

	const [player, setPlayer] = useState('')
	const [cpu, setCpu] = useState('')
	const [score, setScore] = useState({player: 0, cpu: 0})
	const [userAction, setUserAction] = useState(true)

	const options = [rock, paper, scissors]

	const calcScore = () => {
		if (player === cpu) {
			return
		}
		if ((player === 'rock' && cpu === 'scissors') || (player === 'paper' && cpu === 'rock') || (player === 'scissors' && cpu === 'paper')) {
			setScore({...score, player: score.player + 1})
		}
		else {
			setScore({...score, cpu: score.cpu + 1})
		}
	}

	const handleClick = (option) => {
		setUserAction(false)
		setPlayer(option)
		setCpu(options[Math.floor(Math.random() * 2)])
		calcScore()
	}

	return (
		<>
			<div>
				<h2>Rock, Paper, Scissors</h2>
			</div>
			<div className='score'>
				Player {score.player} :
				: {score.cpu} CPU
			</div>
			<div className='game'>
				<div className='player'>
					<img src={player} alt='p1-image'/>
				</div>

				<div className='cpu'>
					<img src={cpu} alt='cpu-image'/>
				</div>
			</div>

			{userAction ?
			<>
				<button onClick={()=>handleClick(rock)}>Rock</button>
				<button onClick={()=>handleClick(paper)}>Paper</button>
				<button onClick={()=>handleClick(scissors)}>Scissors</button>
			</>
				:
			<>
				<button onClick={()=>setUserAction(!userAction)}>Play again!</button>
			</>}
		</>
	)

}
export default App