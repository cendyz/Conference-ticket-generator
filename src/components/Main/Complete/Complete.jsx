import styles from './Complete.module.scss'
import { useGlobalContext } from '../../../Context'

const Complete = () => {
	const { user } = useGlobalContext()
	return (
		<section className={styles.section}>
			<img src='src/images/logo-full.svg' alt='' className={styles.logo} />
			<h2 className={styles.title}>
				Congrats, <span className={styles.name}>Jonatan Kirstof!</span>{' '}
				Your ticket is ready.
			</h2>
			<p className={styles.desc}>
				We've emailed your ticket to{' '}
				<span className={styles.email}>{user.email}</span> and will send
				updates in the run up to the event.
			</p>
		</section>
	)
}
export default Complete
