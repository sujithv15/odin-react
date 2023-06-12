import Wrapper from '../../components/wrappers/Etch.jsx'
import { useState, useRef } from "react";
import {useEffect} from "react";
import Box from './Box.jsx'

const App = () => {
	const [grid, setGrid] = useState([])
	const [gridSize, setGridSize] = useState(0)
	const [gameRunning, setGameRunning] = useState(false)
	const refSize = useRef(0)
	const [gridStyle, setGridStyle] = useState({})

	const clearGrid = () => {
		setGameRunning(false)
	}

	const makeGrid = () => {
		const newGrid = []
		let x = 0
		while (x < gridSize) {
			let row = []
			let y = 0
			while (y < gridSize) {
				// we can use this value to assign key prop to render Box object
				row.push(`${x}${y}`)
				y++
			}
			newGrid.push(row)
			x++
		}
		setGrid([...newGrid])
		// use CSS to dynamically set grid rows/columns
		setGridStyle( { gridTemplateColumns: `repeat(${gridSize}, 1fr)`})
	}



	const startGame = (e) => {
		e.preventDefault()
		// takes us out of select size menu to enter game
		setGameRunning(true)
		// we can use useRef to avoid creating another state which would keep re-rendering as user chooses gridSize
		setGridSize(refSize.current.value)
		makeGrid()
	}

	useEffect(() => {
		console.log(grid)
	},[grid])

	return (
		<Wrapper>
			{gameRunning ?
				<div className='container'>
					<div className='grid' style={gridStyle}>
						{
							grid.map(row => {
								return (
									row.map(square => {
										return (
											<Box key={square}/>
										)
									})
								)
							})
						}
					</div>
					<button onClick={clearGrid}>clear</button>
				</div>
				:
				<form onSubmit={startGame}>
					<label htmlFor='size'>size</label>
					<input type='number' max='50' ref={refSize}/>
					<button type='submit'>submit</button>
				</form>
			}

		</Wrapper>
	)
}


export default App