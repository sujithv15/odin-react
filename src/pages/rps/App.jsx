import Wrapper from "../../components/wrappers/Rps.jsx";
import rockImg from './assets/images/rock.jpg'
import paperImg from './assets/images/paper.jpeg'
import scissorsImg from './assets/images/scissors.jpg'
import logo from './assets/images/logo.jpg'
import playerImg from  './assets/images/player.jpg'
import cpuImg from './assets/images/cpu.jpg'
import {useState} from "react";
import background from './assets/images/background-ring.jpg'
import {useEffect} from "react";

const playerInitial = {
	img: playerImg,
	option: null,
	win: false,
	score: 0,
	alert: 'You win! Play again?',
	showAlert: false,
}
const cpuInitial = {
	img: cpuImg,
	option: null,
	win: false,
	score: 0,
	alert: 'Sorry, you lose. Try Again!',
	showAlert: false,
}

const App = () => {

	const [player, setPlayer] = useState(playerInitial)
	const [cpu, setCpu] = useState(cpuInitial)
	const [displayAlert, setDisplayAlert] = useState(false)
	const [alertText, setAlertText] = useState('')
	const [userAction, setUserAction] = useState(true)
	const [gameMenu, setGameMenu] = useState(true)

	const rock = {
		name: 'rock',
		img: rockImg,
		beats: 'scissors'
	}
	const paper = {
		name: 'paper',
		img: paperImg,
		beats: 'rock'
	}
	const scissors = {
		name: 'scissors',
		img: scissorsImg,
		beats: 'paper'
	}
	const options = [rock, paper, scissors]




	const calcScore = () => {
		console.log(player.option.beats)
		console.log(cpu.option.name)
		if (player.option === cpu.option) {
			console.log('tie')
			return
		}
		/*
		if ((player.option === 'rock' && cpu.option === 'scissors') || (player.option === 'paper' && cpu.option === 'rock') || (player.option === 'scissors' && cpu.option === 'paper')) {
			setPlayer({...player, score: player.score + 1})
		}
		*/
		if (player.option.beats === cpu.option.name) {

			console.log('player win')
			setPlayer({...player, score: player.score + 1})
		}
		else {
			console.log('cpu win')
			setCpu({...cpu, score: cpu.score + 1})
		}
	}

	const newGame = () => {
		setDisplayAlert(true)
		setUserAction(true)
		setAlertText('Rock, Paper, Scissors, SHOOT!')
		setGameMenu(false)
	}

	const playAgain = () => {
		setUserAction(true)
	}
	useEffect(() => {}, [cpu.option])

	//set states for player option after click, then randomly generates and sets cpu state
	const handleClick = (option) => {
		setPlayer({...player, option: option})
		// hides rock, paper, scissor options until user selects to play again or reset
		setUserAction(false)
		setCpu({...cpu, option: options[Math.floor(Math.random() * 2)]})
		calcScore()
	}

	return (
		<Wrapper>


			{/*<img src={background} className='img-ring' alt='background'/>*/}

			<div className='info'>
				{displayAlert && alertText}
			</div>

			<div className='score'>
				<div className='player-score'>
					Player Score: {player.score}
				</div>
				<div className='cpu-score'>
					CPU Score: {cpu.score}
				</div>
			</div>

			<div className='game' >

					<div className='player'>
					<img src={player.img} className='circle' alt='p1-image'/>
				</div>

				<div className='cpu'>
					<img src={cpu.img} className='circle' alt='cpu-image'/>
				</div>

			</div>


			{userAction ?
				<>
					<button onClick={() => handleClick(rock)}>Rock</button>
					<button onClick={() => handleClick(paper)}>Paper</button>
					<button onClick={() => handleClick(scissors)}>Scissors</button>
				</>

				:

				<div>
					<button onClick={playAgain}>Play Again!</button>
					<button onClick={newGame}>Reset!</button>
				</div>
			}

		</Wrapper>

	)

}
export default App