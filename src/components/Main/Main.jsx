import styles from './Main.module.scss'
import UpperBox from './UpperBox'
import Form from './Form'
import Complete from './Complete'
import { useGlobalContext } from '../../Context'

const Main = () => {
	const { completeForm } = useGlobalContext()
	return (
		<main className={styles.main}>
			{/* {!completeForm && (
				<>
					<UpperBox />

					<Form />
				</>
			)}
			{completeForm && <Complete />} */}
			<Complete/>
		</main>
	)
}
export default Main
