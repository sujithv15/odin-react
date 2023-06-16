import Wrapper from '../../components/wrappers/Etch.jsx'
import { useState, useRef } from "react";
import {useEffect} from "react";
import Box from './Box.jsx'
import {nanoid} from "nanoid";

const App = () => {
	// hard coded grid size; possibly make dynamic in future
	const [grid, setGrid] = useState(Array.from({length: 100}))
	const [color, setColor] = useState('black')

	// hard code grid style for 10 columns
	const styles = {
		gridTemplateColumns: `repeat(10, 1fr)`
	}

	return (
		<Wrapper>
			<div className='container'>
				<form>
					<label htmlFor='color'>color</label>
					<input type='color' onChange={(e)=>setColor(e.target.value)}/>
				</form>

				<div className='grid' style={styles}>
					{
						grid.map(square => {
							const id = nanoid()
							return (
								<div key={id}>
									<Box color={color}/>
								</div>
							)
						})
					}
				</div>
			</div>
		</Wrapper>
	)
}


export default App