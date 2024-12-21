import styles from './Form.module.scss'
import { useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Form = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		username: '',
	})

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const checkEmail = email => {
		return emailRegex.test(email)
	}

	const checkNames = (name, username) => {
		return name !== '' && username !== ''
	}

	const handleSubmit = e => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const newUser = Object.fromEntries(formData)

		if (
			checkEmail(newUser.email) &&
			checkNames(newUser.name, newUser.username)
		) {
			setUser(newUser)
		}
	}

	return (
		<form className={styles.form} onClick={handleSubmit}>
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
				/>
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
