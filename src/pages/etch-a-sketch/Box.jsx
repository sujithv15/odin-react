import {useState} from "react";
import {useEffect} from "react";


const Box = ({ color }) => {

	// user can draw and erase as desired
	const [clicked, setClicked] = useState(false)

	// used to dynamically change inline CSS by passing in the color
	const [styles, setStyles] = useState({background: 'white'})

	// re-renders the Box component only when clicked, toggling style from white and color
	useEffect(() => {
		clicked ? setStyles({background: color}) : setStyles({background: 'white'})
	}, [clicked])

	return (
		<div
			className='box'
			style={styles}
			onClick={()=>setClicked(!clicked)}>
			.-|-.
		</div>
	)
}

export default Box