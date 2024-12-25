import styles from './Ticket.module.scss'
import { useGlobalContext } from '../../../../Context'
import { useState } from 'react'

const Ticket = () => {
	const { user, preview, ticketNumber } = useGlobalContext()
	return (
		<section className={styles.section}>
			<div className={styles.ticket}>
				<div className={styles.leftPart}>
					<div className={styles.leftUp}>
						<img
							src='src/images/logo-mark.svg'
							alt='Logo'
							className={styles.logo}
						/>
						<div className={styles.eventInfo}>
							<h3 className={styles.eventName}>Coding Conf</h3>
							<p className={styles.eventDate}>Jan 31, 2025 / Austin, TX</p>
						</div>
					</div>
					<div className={styles.leftDown}>
						<img src={preview} alt='Avatar' className={styles.avatar} />
						<div className={styles.personInfo}>
							<h3 className={styles.personName}>{user.name}</h3>
							<p className={styles.personGit}>
								<img
									src='src/images/icon-github.svg'
									alt='Github icon'
									className={styles.gitIcon}
								/>{' '}
								{user.username}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.ticketNumber}>
				<p className={styles.number}>#0{ticketNumber}</p>
			</div>
		</section>
	)
}
export default Ticket
