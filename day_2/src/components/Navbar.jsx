import '../index.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
       <>
         <div className='navbar'>
            <div className="logo">
                <Link to='/' className='logo'>Ridwanullah</Link>
            </div>

            {/* Desktop nav */}
            <ul className="nav-links">
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </ul>

            {/* Hamburger button */}
            <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <hr className='nav-hr' />

        {/* Mobile menu */}
        {menuOpen && (
            <div className="mobile-menu">
                <Link to='/about' onClick={() => setMenuOpen(false)}>About</Link>
                <Link to='/projects' onClick={() => setMenuOpen(false)}>Projects</Link>
                <Link to='/contact' onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        )}
       </>
    )
}

export default Navbar;
