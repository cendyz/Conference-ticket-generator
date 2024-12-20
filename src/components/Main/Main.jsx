import styles from './Main.module.scss'
import UpperBox from './UpperBox'
import Form from './Form'

const Main = () => {
	return (
		<main className={styles.main}>
			<UpperBox />
			<Form />
		</main>
	)
}
export default Main
