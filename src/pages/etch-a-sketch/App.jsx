import Wrapper from '../../components/wrappers/Etch.jsx'
import { useState, useRef } from "react";
import {useEffect} from "react";
import Box from './Box.jsx'

const App = () => {

	return (
		<Wrapper>
			<div className='container'>
				<Box />
				<Box />
				<Box />
				<Box />
			</div>

		</Wrapper>
	)
}


export default App