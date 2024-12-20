import styles from './Main.module.scss'

const Main = () => {
	return (
		<main className={styles.main}>
			<img
				src='src/images/logo-full.svg'
				alt='logo'
				className={styles.logo}
			/>
			<div className='title-box'>
				<h1 className={styles.title}>
					Your Journey to Coding Conf 2025 Starts Here!
				</h1>
				<p className={styles.text}>
					Secure your spot at next year's biggest coding conference.
				</p>
			</div>
		</main>
	)
}
export default Main
