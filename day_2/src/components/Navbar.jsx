import '../index.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
       <>
         <div className='navbar'>
            <div className="logo">
                <Link to='/' className='logo'>Ridwanullah</Link>
            </div>
            <ul className="nav-links">
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </div>
        <hr className='nav-hr' />
       </>
    )
}

export default Navbar;