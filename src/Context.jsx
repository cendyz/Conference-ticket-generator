import { useState, createContext, useContext } from 'react'

const GlobalContext = createContext()

const AppContext = ({ children }) => {
	const [completeForm, setCompleteForm] = useState(false)
	const [preview, setPreview] = useState(null)
	const [ticketNumber, setTicketNumber] = useState(1609)

	const [user, setUser] = useState({
		name: '',
		email: '',
		username: '',
	})
	const handleComplete = () => {
		setCompleteForm(true)
	}

	const handleTicketNumber = () => {
		setTicketNumber(ticketNumber + 1)
	}

	return (
		<GlobalContext.Provider
			value={{
				completeForm,
				handleComplete,
				user,
				setUser,
				preview,
				setPreview,
				ticketNumber,
				handleTicketNumber,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
