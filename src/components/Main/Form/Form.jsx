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
			<div className={styles.avatarErrorInfo}>
				<img
					src='src/images/icon-info.svg'
					alt='Alert icon'
					className={styles.alertIcon}
				/>
				<span className={styles.errorInfo}>
					Upload your photo (JPG or PNG, max size: 500KB).
				</span>
			</div>
			<label htmlFor='fullName' className={styles.formLabel}>
				Full Name
			</label>
			<input type='text' className={styles.formInput} id='fullName' />
			<label htmlFor='email' className={styles.formLabel}>
				Email Address
			</label>
			<input
				type='text'
				className={styles.formInput}
				id='email'
				placeholder='example@email.com'
			/>
			<label htmlFor='username' className={styles.formLabel}>
				Github Username
			</label>
			<input
				type='text'
				className={styles.formInput}
				id='username'
				placeholder='@yourusername'
			/>
			<button type='submit' className={styles.submitBtn}>Generate My Ticket</button>
		</form>
	)
}
export default Form
