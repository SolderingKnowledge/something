import React, { useState } from 'react'
import Slow from './Slow'
import './index.css'

const Input = () => {
	const [input, setInput] = useState('')

	const handleChange = (e) => {
		setInput(e.target.value)
	}

	return (
		<div className="defferedContainer">
			<input type="text" value={input} onChange={handleChange} placeholder="Deffered" />
			<Slow input={input} />
		</div>
	)
}

export default Input
