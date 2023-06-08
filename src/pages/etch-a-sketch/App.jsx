import Wrapper from '../../components/wrappers/Etch.jsx'
import { useState, useRef } from "react";
import {useEffect} from "react";


const App = () => {

	const sizeRef = useRef()
	const [grid, setGrid] = useState()
	const [game, setGame] = useState(false)

	useEffect(() => {}, [])
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(`printing...`)
		console.log(sizeRef.current.value)
		startGame(sizeRef.current.value)
	}

	const startGame = (size) => {
		const newGrid = []
		let x = 0
		let y = 0
		while (x < size) {
			const row = []
			while (y < size) {
				row.push(0)
				y++
			}
			y = 0
			newGrid.push(row)
			x++
		}
		setGrid((curr) => {
			return newGrid
		})
		setGrid((curr) => {
			return newGrid
		})
		console.log(newGrid)
		console.log(grid)
		setGame(true)
	}

	return (
		<Wrapper>
			{game &&

					grid.map((square) => {
						return (
							<div className='square'>X</div>
						)
					})

			}
			<form onSubmit={handleSubmit}>
				<label htmlFor='size'>size: </label>
				<input ref={sizeRef} type='number' id='size'/>
				<button type='submit'>submit</button>
			</form>
		</Wrapper>
	)
}

export default App