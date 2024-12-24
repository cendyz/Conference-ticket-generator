import styles from './Main.module.scss'
import UpperBox from './UpperBox'
import Form from './Form'
import Complete from './Complete'
import { useState } from 'react'

const Main = () => {
	const [complete, setComplete] = useState(true)
	const [success, setSuccess] = useState(false)

	return (
		<main className={styles.main}>
			<UpperBox />
			{complete && <Form setSuccess={setSuccess} setComplete={setComplete} />}
			{success && <Complete />}
		</main>
	)
}
export default Main
