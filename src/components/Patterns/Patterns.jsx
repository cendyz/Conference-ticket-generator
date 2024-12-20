import styles from './Patterns.module.scss'
import circles from '../../images/pattern-circle.svg'
import lines from '../../images/pattern-lines.svg'
import lineBottom from '../../images/pattern-squiggly-line-bottom.svg'
import lineTop from '../../images/pattern-squiggly-line-top.svg'

const Patterns = () => {
	return (
		<div className={styles.patterns}>
			<img src={circles} alt='circles' className={styles.circles} />
			<img src={lines} alt='lines' className={styles.lines} />
			<img
				src={lineBottom}
				alt='squiggly line'
				className={styles.bottomLine}
			/>
			<img src={lineTop} alt='squiggly line' className={styles.topLine} />
		</div>
	)
}
export default Patterns
