const { NavLink } = require("react-router-dom")

const NavBar = () => {
    return(
        <nav className='nav black'>
        <div className='nav-wrapper'>
            <NavLink to='/' className='left'>
                Home
            </NavLink>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><NavLink to='/cart' >
                <i className="large material-icons">shopping_cart</i>
            </NavLink>
            </li>
            </ul>
        </div>
        </nav>
    )
}

export default NavBar