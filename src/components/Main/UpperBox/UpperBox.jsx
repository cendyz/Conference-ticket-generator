import styles from './UpperBox.module.scss'
import logo from '../../../images/logo-full.svg'

const UpperBox = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt='logo' className={styles.logo} />
			<div className='title-box'>
				<h1 className={styles.title}>
					Your Journey to Coding Conf 2025 Starts Here!
				</h1>
				<p className={styles.text}>
					Secure your spot at next year's biggest coding conference.
				</p>
			</div>
		</header>
	)
}
export default UpperBox
