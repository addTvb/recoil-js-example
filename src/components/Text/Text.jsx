import React from 'react'

import { useRecoilValue } from 'recoil'
import { getTextState } from '../../recoil/selectors/getTextState'

import './Text.css'

export const Text = () => {
	const textValue = useRecoilValue(getTextState)

	return <h3 className='text'>Value length: {textValue}</h3>
}
