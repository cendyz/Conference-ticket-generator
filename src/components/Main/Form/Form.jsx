import styles from './Form.module.scss'
import { useState, useRef } from 'react'
import classNames from 'classnames'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Form = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		username: '',
	})
	const fileInputRef = useRef(null)
	const [loaded, setLoaded] = useState(false)
	const [fileError, setFileError] = useState(false)
	const [preview, setPreview] = useState(null)
	const [avatarError, setAvatarError] = useState(
		'Upload your photo (JPG or PNG, max 500KB)'
	)
	const [emailError, setEmailError] = useState(false)
	const [succes, setSuccess] = useState(false)
	const [redBorder, setRedBorder] = useState(false)
	const [avatarBorder, setAvatarBorder] = useState(false)
	const [nameBorder, setNameBorder] = useState(false)
	const [emailBorder, setEmailBorder] = useState(false)
	const [usernameBorder, setUsernameBorder] = useState(false)
	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleFileChange = e => {
		const selectedFile = e.target.files[0]
		if (!selectedFile) {
			return
		}

		if (selectedFile && selectedFile.size > 500 * 1024) {
			setAvatarError('Your file is too large.')
			setFileError(true)
			setLoaded(false)
			setPreview(null)
		} else {
			setAvatarError('Image uploaded successfully!')
			setFileError(false)
			setLoaded(true)
			setRedBorder(false)
			setPreview(URL.createObjectURL(selectedFile))
		}
	}

	const checkEmail = () => {
		if (!emailRegex.test(user.email)) {
			setEmailError(true)
			return false
		} else {
			setEmailError(false)
			return true
		}
	}

	const checkInputs = () => {
		if (!user.name) {
			setNameBorder(true)
		} else {
			setNameBorder(false)
		}
		if (!user.email) {
			setEmailBorder(true)
		} else {
			setEmailBorder(false)
		}
		if (!user.username) {
			setUsernameBorder(true)
		} else {
			setUsernameBorder(false)
		}
		if (!preview) {
			setAvatarBorder(true)
		} else {
			setAvatarBorder(false)
		}

		checkEmail()
		if (!user.name || !user.email || !user.username || !preview) {
			return false
		}
	}

	const deletePhoto = () => {
		setAvatarError('Upload your photo (JPG or PNG, max 500KB)')
		setLoaded(false)
		setPreview(null)
		fileInputRef.current.value = null
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (checkInputs()) {
			const formData = new FormData(e.currentTarget)
			const newUser = Object.fromEntries(formData)
			setUser(newUser)
			console.log('Form submitted successfully')
		} else {
			console.log('Form submission failed')
		}
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
					<label
						htmlFor='avatar'
						className={`${styles.customFileUpload} ${
							avatarBorder ? styles.redDottedBorder : ''
						}`}>
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
					ref={fileInputRef}
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
				className={`${styles.formInput} ${
					nameBorder ? styles.redBorder : ''
				}`}
				id='fullName'
				name='name'
				onChange={handleChange}
				value={user.name}
			/>
			<label htmlFor='email' className={styles.formLabel}>
				Email Address
			</label>
			<input
				type='text'
				className={`${styles.formInput} ${
					emailBorder ? styles.redBorder : ''
				}`}
				id='email'
				placeholder='example@email.com'
				name='email'
				onChange={handleChange}
				value={user.email}
			/>
			{emailError && (
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
			)}
			<label htmlFor='username' className={styles.formLabel}>
				Github Username
			</label>
			<input
				type='text'
				className={`${styles.formInput} ${
					usernameBorder ? styles.redBorder : ''
				}`}
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
