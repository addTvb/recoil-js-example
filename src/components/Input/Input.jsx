import React from 'react'

import { useRecoilState } from 'recoil'
import { textState } from '../../recoil/atoms/textState'

import './Input.css'

export const Input = () => {
	const [text, setText] = useRecoilState(textState)

	const handleChange = event => {
		setText(event.target.value)
	}

	return (
		<input type='text' value={text} onChange={handleChange} className='input' />
	)
}
