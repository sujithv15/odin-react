import {useState} from "react";


const Box = () => {

	const [color, setColor] = useState('white')

	const handleClick = () => {
		setColor('black')
	}

	return (
		<div className='box' style={{background: color}} onClick={handleClick}>[ ]</div>
	)
}

export default Box