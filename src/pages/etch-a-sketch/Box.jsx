import {useState} from "react";


const Box = () => {

	const checkedBox = {
		background: 'black'
	}

	const whiteBox = {
		background: 'white'
	}

	const [color, setColor] = useState('white')

	const handleClick = () => {
		setColor('black')
	}

	return (
		<div className='box' style={{background: color}} onClick={handleClick}>.-|-.</div>
	)
}

export default Box