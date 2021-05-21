import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
	const [click, setclick] = useState(false)
	const [button, setButton] = useState(true)
	const  handleClick = () => setclick(!click);
	const closeMobileMenu = () => setclick(false)
	const showButton = () => {
		if(window.innerWidth <= 960) {
			setButton(false)
		} else {
			setButton(true)
		}
	}

	useEffect(() => {
		showButton()
	}, [])

	window.addEventListener('resize', showButton)
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						LOTRS
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click	? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/Map' className='nav-links' onClick={closeMobileMenu}>
								Map
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/About' className='nav-links' onClick={closeMobileMenu}>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/discord' className='nav-links-mobile' onClick={closeMobileMenu}>
								Discord
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle='btn--outline'>DISCORD</Button>}
				</div>
			</nav>
		</>
	)
}

export default Navbar
