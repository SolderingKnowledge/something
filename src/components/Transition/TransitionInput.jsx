import React, { useTransition, useState } from 'react'
import './index.css'

const TransitionInput = () => {
	const [isPending, startTransition] = useTransition()
	const [input, setInput] = useState('')
	const [list, setList] = useState([])

	const LIST_SIZE = 20000

	const handleChange = (e) => {
		const value = e.target.value
		setInput(value)
		const items = []
		startTransition(() => {
			for (let i = 0; i < LIST_SIZE; i++) {
				items.push(value)
			}

			setList(items)
		})
	}

	return (
		<div className="transitionContainer">
			<input type="text" value={input} onChange={handleChange} id="transition" placeholder="Transition" />
			{list.map((item, idx) => (
				<div key={idx}>{item}</div>
			))}
		</div>
	)
}

export default TransitionInput
