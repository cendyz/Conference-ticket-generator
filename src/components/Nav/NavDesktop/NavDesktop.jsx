import './navDesktop.scss'
import { mobileMenuData, mobileInnerMenu } from '../../../data'
import { nanoid } from 'nanoid'
import { useState, useEffect, useRef } from 'react'

import arrowImg from '../../../images/icon-arrow-light.svg'
import logo from '../../../images/logo.svg'

const NavDesktop = () => {
	const [active, setActive] = useState(null)
	const [activeItems, setActiveItems] = useState(new Set())
	const [unActvieItems, setUnActiveItems] = useState(new Set())
	const menuRef = useRef(null)
	const buttonRefs = useRef([])
	console.log(buttonRefs.current);

	const handleActive = (index, event) => {
		event.stopPropagation()
		setActive(item => (item === index ? null : index))
		setActiveItems(prevItem => {
			const newItems = new Set(prevItem)
			if (newItems.has(index)) {
				newItems.delete(index)
				setUnActiveItems(unPrevItem => new Set(unPrevItem).add(index))
			} else {
				newItems.add(index)
				setUnActiveItems(unPrevItem => {
					const actualItems = new Set(unPrevItem)
					actualItems.delete(index)
					return actualItems
				})
			}
			return newItems
		})
	}

	const handleClickOutside = event => {
		console.log(event.target)
		if (
			menuRef.current &&
			!menuRef.current.contains(event.target) &&
			!buttonRefs.current.some(ref => ref && ref.contains(event.target))
		) {
			setActive(null)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<nav className='nav-desktop' ref={menuRef}>
			<div className='left-box'>
				<img src={logo} alt='logo' className='nav-logo' />
				{mobileMenuData.map(({ name, group }, index) => {
					const actualGroup = mobileInnerMenu.find(
						item => item.group === group
					)
					return (
						<div className='link-container' key={index}>
							<div
								className='click-box'
								onClick={event => handleActive(index, event)}
								ref={el => (buttonRefs.current[index] = el)}>
								<a href='#' className='desktop-main-link'>
									{name}
								</a>
								<img
									src={arrowImg}
									alt='arrow icon'
									className={`arrow-img ${
										active === index
											? 'rotated'
											: activeItems.has(index) || unActvieItems.has(index)
											? 'no-rotated'
											: ''
									}`}
								/>
							</div>
							<div className='links-box'>
								{active === index &&
									actualGroup.links.map(link => {
										return (
											<a href='#' className='desktop-link' key={nanoid()}>
												{link}
											</a>
										)
									})}
							</div>
						</div>
					)
				})}
			</div>
			<div className='right-box'>
				<button className='login-btn'>Login</button>
				<button className='sign-btn'>Sign Up</button>
			</div>
		</nav>
	)
}
export default NavDesktop
