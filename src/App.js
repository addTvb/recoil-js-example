import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue
} from 'recoil'

import { Input } from './components/Input'
import { Text } from './components/Text'

import recoilLogo from './img/recoil-logo.svg'
import './App.css'

function App() {
	return (
		<RecoilRoot>
			<div className='wrapper'>
				<div className='title-wrapper'>
					<h1>Input change state with </h1>
					<a href='https://recoiljs.org/'>
						<img src={recoilLogo} alt='Recoil.js white logo' />
					</a>
				</div>
				<Input />
				<Text />
			</div>
		</RecoilRoot>
	)
}

export default App
