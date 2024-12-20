import styles from './Patterns.module.scss'

const Patterns = () => {
	return (
		<div className={styles.patterns}>
			<img
				src='src/images/pattern-circle.svg'
				alt='circles'
				className={styles.circles}
			/>
			<img
				src='src/images/pattern-lines.svg'
				alt='lines'
				className={styles.lines}
			/>
			<img
				src='src/images/pattern-squiggly-line-bottom.svg'
				alt='squiggly line'
				className={styles.bottomLine}
			/>
			<img
				src='src/images/pattern-squiggly-line-top.svg'
				alt='squiggly line'
				className={styles.topLine}
			/>
		</div>
	)
}
export default Patterns
