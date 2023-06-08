import Wrapper from "../../components/wrappers/Rps.jsx";
import rock from './assets/images/rock.jpg'
import paper from './assets/images/paper.jpeg'
import scissors from './assets/images/scissors.jpg'
import logo from './assets/images/logo.jpg'
import playerDefault from  './assets/images/player.jpg'
import cpuDefault from './assets/images/cpu.jpg'
import {useState} from "react";


const App = () => {


	const [player, setPlayer] = useState('')
	const [cpu, setCpu] = useState('')
	const [score, setScore] = useState({player: 0, cpu: 0})
	const [displayAlert, setDisplayAlert] = useState(false)
	const [alertText, setAlertText] = useState('')
	const [userAction, setUserAction] = useState(false)
	const [gameMenu, setGameMenu] = useState(true)

	const options = [rock, paper, scissors]

	const calcScore = () => {
		console.log(player)
		console.log(cpu)
		if (player === cpu) {
			return
		}
		if ((player === rock && cpu === scissors) || (player === paper && cpu === rock) || (player === scissors && cpu === paper)) {
			const newScore = score.player + 1
			setScore({...score, player: newScore})
		}
		else {
			setScore({...score, cpu: score.cpu + 1})
		}
	}

	const handleClick = (option) => {
		setUserAction(false)
		setPlayer(option)
		console.log(`Player chose ${player}`)
		setCpu(options[Math.floor(Math.random() * 2)])
		console.log(`CPU chose ${cpu}`)
		console.log(score)
		calcScore()
	}

	const newGame = () => {
		setPlayer(playerDefault)
		setCpu(cpuDefault)
		setScore({player: 0, cpu: 0})
		setDisplayAlert(true)
		setUserAction(true)
		setAlertText('Rock, Paper, Scissors, SHOOT!')
		setGameMenu(false)
	}

	return (
		<Wrapper>
			{
				gameMenu ?

				<div className='menu'>
					<header>
						<h2>Rock, Paper, Scissors</h2>
					</header>
					<img src={logo} alt='logo'/>
					<div>
						<button onClick={newGame}>Play</button>
					</div>
				</div>
			:

					<>
			<div className='info'>
				{displayAlert && alertText}
			</div>

			<div className='score'>
				<div className='player-score'>
					Player Score: {score.player}
				</div>
				<div className='cpu-score'>
					CPU Score: {score.cpu}
				</div>
			</div>

			<div className='game' >

					<div className='player'>
					<img src={player} className='circle' alt='p1-image'/>
				</div>

				<div className='cpu'>
					<img src={cpu} className='circle' alt='cpu-image'/>
				</div>

			</div>



			{userAction &&
			<>
				<button onClick={()=>handleClick(rock)}>Rock</button>
				<button onClick={()=>handleClick(paper)}>Paper</button>
				<button onClick={()=>handleClick(scissors)}>Scissors</button>
			</>}


			<div>
				<button onClick={newGame}>Reset!</button>
			</div>
					</>
			}
		</Wrapper>

	)

}
export default App