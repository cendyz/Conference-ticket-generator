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
	const [preview, setPreview] = useState(null)
	const [loaded, setLoaded] = useState(false)

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleFileChange = e => {
		const selectedFile = e.target.files[0]
		if (!selectedFile) {
			return
		}
		if (selectedFile && selectedFile.size > 500 * 1024) {
			setFileError(true)
			setAvatarError('File size should be less than 500 KB')
			setPreview(null)
			setLoaded(false)
		} else {
			setLoaded(true)
			setFileError(false)
			setAvatarError('Image uploaded successfully!')
			setPreview(URL.createObjectURL(selectedFile))
		}
	}

	const deletePhoto = () => {
		setPreview(null)
		setLoaded(false)
		setAvatarError('Upload your photo (JPG or PNG, max 500KB)')
	}

	const handleSubmit = e => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const newUser = Object.fromEntries(formData)

		setUser(newUser)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label htmlFor='avatar' className={styles.avatarLabel}>
				Upload Avatar
			</label>
			<div className={styles.uploadBox}>
				{loaded ? (
					<div
						className={styles.customFileUpload}
						style={loaded ? { cursor: 'default' } : {}}>
						<img
							src={preview}
							alt='Upload image'
							className={styles.uploadIcon}
							style={loaded ? { padding: '0' } : {}}
						/>
						<div className={styles.btnsBox}>
							<button className={styles.imgBtn} onClick={deletePhoto}>
								Remove image
							</button>
							<label htmlFor='avatar' className={styles.imgBtn}>
								Change image
							</label>
						</div>
					</div>
				) : (
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
				)}

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
