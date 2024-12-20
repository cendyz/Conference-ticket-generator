import { useGlobalContext } from '../../context'

const Test = () => {
	const { name } = useGlobalContext()

	const showName = () => {
		console.log(name)
	}

	return <button onClick={showName}>Click</button>
}
export default Test
