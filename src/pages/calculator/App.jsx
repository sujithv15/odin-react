import Wrapper from "../../components/wrappers/Calculator.jsx";
import {useState} from "react";

const App = () => {

	const calc = (func, value) => {



	}


	// state to manage total calculation
	const [total, setTotal] = useState([])

	// state to manage current number
	const [current, setCurrent] = useState(0)

	// when user inputs number, set current state to previous state, with new number appended
	const handleNumber = (e) => {
		setCurrent((prevState) => {
			return prevState + e.target.value
		})
		console.log(typeof current)
		console.log(current)
	}

	// handle when user enters operator
	const handleOp = () => {
		setTotal([...total, current])
	}

	const clear = () => {
		setCurrent(0)
	}
	const clearAll = () => {
		setTotal([])
	}

	return (
		<Wrapper>
			<div className='container'>
				<div className='grid-nums'>
					<button className='numbers' value={7} onClick={handleNumber}>7</button>
					<button className='numbers' value={8} onClick={handleNumber}>8</button>
					<button className='numbers' value={9} onClick={handleNumber}>9</button>
					<button className='numbers' value={4} onClick={handleNumber}>4</button>
					<button className='numbers' value={5} onClick={handleNumber}>5</button>
					<button className='numbers' value={6} onClick={handleNumber}>6</button>
					<button className='numbers' value={1} onClick={handleNumber}>1</button>
					<button className='numbers' value={2} onClick={handleNumber}>2</button>
					<button className='numbers' value={3} onClick={handleNumber}>3</button>
					<button className='numbers' value={0} onClick={handleNumber}>0</button>
				</div>
				<div className='grid-ops'>
					<button className='operators' value={'+'} onClick={handleOp}>+</button>
					<button className='operators' value={'-'} onClick={handleOp}>-</button>
					<button className='operators' value={'*'} onClick={handleOp}>*</button>
					<button className='operators' value={'/'} onClick={handleOp}>/</button>
					<button className='operators' value={'='} onClick={handleOp}>=</button>
				</div>
				<button className='operators' onClick={clear}>clear</button>
				<button className='operators' onClick={clearAll}>clear all</button>

			</div>
		</Wrapper>
	)

}

export default App