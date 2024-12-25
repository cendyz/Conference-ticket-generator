import styles from './Form.module.scss'
import { useState, useRef } from 'react'
import classNames from 'classnames'
import { useGlobalContext } from '../../../Context'
import uploadIcon from '../../../images/icon-upload.svg'
import iconInfo from '../../../images/icon-info.svg'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Form = () => {
	const {
		handleComplete,
		user,
		setUser,
		preview,
		setPreview,
		handleTicketNumber,
	} = useGlobalContext()

	const fileInputRef = useRef(null)
	const [loaded, setLoaded] = useState(false)
	const [fileError, setFileError] = useState(false)
	const [avatarError, setAvatarError] = useState(
		'Upload your photo (JPG or PNG, max 500KB)'
	)

	const [errors, setErros] = useState({
		avatar: false,
		name: false,
		email: false,
		username: false,
		emailError: false,
	})

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleUsername = e => {
		let value = e.target.value

		if (value === '') {
			setUser({ ...user, username: '' })
		} else if (!value.startsWith('@')) {
			setUser({ ...user, username: '@' + value })
		} else {
			setUser({ ...user, username: value })
		}
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
			setPreview(URL.createObjectURL(selectedFile))
		}
	}

	const checkInputs = () => {
		const newErrors = {
			name: !user.name,
			email: !user.email,
			username: !user.username,
			avatar: !preview,
			emailFormat: !emailRegex.test(user.email),
		}

		setErros(newErrors)

		return !Object.values(newErrors).some(error => error)
	}

	const deletePhoto = () => {
		setAvatarError('Upload your photo (JPG or PNG, max 500KB)')
		setLoaded(false)
		setPreview(null)
		setErros({ ...errors, avatar: false })
		fileInputRef.current.value = null
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (checkInputs()) {
			const formData = new FormData(e.currentTarget)
			const newUser = Object.fromEntries(formData)
			setUser(newUser)
			handleComplete()
			handleTicketNumber()
		}
	}

	return (
		<>
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
								errors.avatar ? styles.redDottedBorder : ''
							}`}>
							<img
								src={uploadIcon}
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
						src={iconInfo}
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
						errors.name ? styles.redBorder : ''
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
						errors.email ? styles.redBorder : ''
					}`}
					id='email'
					placeholder='example@email.com'
					name='email'
					onChange={handleChange}
					value={user.email}
				/>
				{errors.emailFormat && (
					<div className={styles.errorBox}>
						<img
							src={iconInfo}
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
						errors.username ? styles.redBorder : ''
					}`}
					id='username'
					placeholder='@yourusername'
					name='username'
					onChange={handleUsername}
					value={user.username}
				/>
				<button type='submit' className={styles.submitBtn}>
					Generate My Ticket
				</button>
			</form>
		</>
	)
}
export default Form
