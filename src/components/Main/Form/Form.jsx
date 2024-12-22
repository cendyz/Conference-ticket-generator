import styles from './Form.module.scss'
import { useState } from 'react'
import classNames from 'classnames'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Form = () => {
	const [user, setUser] = useState({
		avatar: '',
		name: '',
		email: '',
		username: '',
	})
	const [fileError, setFileError] = useState(false)
	const [avatarError, setAvatarError] = useState(
		'Upload your photo (JPG or PNG, max 500KB)'
	)
	// const [file, setFile] = useState(null)
	// const [preview, setPreview] = useState(null)

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleFileChange = e => {
		const selectedFile = e.target.files[0]
		if (selectedFile && selectedFile.size > 500 * 1024) {
			setFileError('File size should be less than 500 KB')
			setFile(null)
			setPreview(null)
		} else {
			setFileError('')
			setFile(selectedFile)
			setPreview(URL.createObjectURL(selectedFile))
		}
	}

	const handleSubmit = e => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const newUser = Object.fromEntries(formData)
		setUser(newUser)
		console.log(user)
		// if (
		// 	checkEmail(newUser.email) &&
		// 	checkNames(newUser.name, newUser.username)
		// ) {
		// 	setUser(newUser)
		// 	console.log(user);
		// }
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
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
				<input
					id='avatar'
					className={styles.avatarInput}
					type='file'
					name='avatar'
					accept='image/png, image/jpeg'
					onChange={handleFileChange}
				/>
			</div>
			<div className={styles.avatarErrorInfo}>
				<img
					src='src/images/icon-info.svg'
					alt='Alert icon'
					className={
						fileError
							? classNames(styles.alertIcon, styles.errorIcon)
							: styles.alertIcon
					}
				/>
				<span
					className={
						fileError
							? classNames(styles.errorInfo, styles.errorTextColor)
							: styles.errorInfo
					}>
					{avatarError}
				</span>
			</div>
			<label htmlFor='fullName' className={styles.formLabel}>
				Full Name
			</label>
			<input
				type='text'
				className={styles.formInput}
				id='fullName'
				name='name'
				onChange={handleChange}
				value={user.name}
			/>
			<label htmlFor='email' className={styles.formLabel}>
				Email Address
			</label>
			<input
				type='email'
				className={styles.formInput}
				id='email'
				placeholder='example@email.com'
				name='email'
				onChange={handleChange}
				value={user.email}
			/>
			<div className={styles.errorBox}>
				<img
					src='src/images/icon-info.svg'
					alt='Error icon'
					className={styles.errorIcon}
				/>
				<p className={styles.errorText}>
					Please enter a valid email address.
				</p>
			</div>
			<label htmlFor='username' className={styles.formLabel}>
				Github Username
			</label>
			<input
				type='text'
				className={styles.formInput}
				id='username'
				placeholder='@yourusername'
				name='username'
				onChange={handleChange}
				value={user.username}
			/>

			<button type='submit' className={styles.submitBtn}>
				Generate My Ticket
			</button>
		</form>
	)
}
export default Form

// const checkEmail = email => {
// 	return emailRegex.test(email)
// }

// const checkNames = (name, username) => {
// 	return name !== '' && username !== ''
// }

// const handleFileChange = e => {
// 	const selectedFile = e.target.files[0]
// 	if (selectedFile && selectedFile.size > 500 * 1024) {
// 		setAvatarError(
// 			'File too large. Please upload a file less than 500KB'
// 		)
// 		setFileError(true)
// 	} else {
// 		setAvatarError('Your photo is uploaded successfully!')
// 		setFileError(false)
// 	}
// }
