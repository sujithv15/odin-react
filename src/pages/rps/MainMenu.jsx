import logo from "./assets/images/logo.jpg";


const MainMenu = () => {

	const newGame = () => {

	}

	return (
		<menu>
			<h2>Rock, Paper, Scissors</h2>

			<div className='menu'>
				<img src={logo} alt='logo'/>
				<div>
					<button onClick={newGame}>Play</button>
				</div>
			</div>

		</menu>
	)

}

export default MainMenu