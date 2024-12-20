import styles from './Form.module.scss'
import classNames from 'classnames'

const Form = () => {
	return (
		<form className={styles.form}>
			<label htmlFor='avatar' className={styles.avatarLabel}>
				Upload Avatar
			</label>
			<div className={styles.uploadBox}>
				<label htmlFor='avatar' className={styles.customFileUpload}>
					<img
						src='src/images/icon-upload.svg'
						alt='Upload icon'
						className={styles.uploadIcon}
					/>
					<span className={styles.uploadDesc}>
						Drag and drop or click to upload
					</span>
				</label>
				<input id='avatar' className={styles.avatarInput} type='file' />
			</div>
            <p className="upload-info"></p>
		</form>
	)
}
export default Form
