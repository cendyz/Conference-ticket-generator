import styles from './Ticket.module.scss'

const Ticket = () => {
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
						<img
							src='src/images/image-avatar.jpg'
							alt='Avatar'
							className={styles.avatar}
						/>
						<div className={styles.personInfo}>
							<h3 className={styles.personName}>Jonatan Kristof</h3>
							<p className={styles.personGit}><img src="src/images/icon-github.svg" alt="Github icon" className={styles.gitIcon} /> @jonatankristof0101</p>
						</div>
					</div>
				</div>
			</div>
				<div className={styles.ticketNumber}>
					<p className={styles.number}>#01609</p>
				</div>
		</section>
	)
}
export default Ticket