import React, { useDeferredValue, useMemo, useEffect } from 'react'

const Slow = ({ input }) => {
	const defferedInput = useDeferredValue(input)
	const LIST_SIZE = 200000
	const list = useMemo(() => {
		const items = []
		for (let i = 0; i < LIST_SIZE; i++) {
			items.push(<div key={i}>{defferedInput}</div>)
		}
		return items
	}, [defferedInput])

	useEffect(() => {
		console.log(`Input: ${input}, defferedValue: ${defferedInput}`)
	}, [input, defferedInput])

	return list
}

export default Slow
