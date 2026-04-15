import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
    <nav>
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>
            Home
        </NavLink>
        <NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''}>
            Products
        </NavLink>
        <NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''}>
            Services
        </NavLink>
        <NavLink to="/protfolio" className={({isActive}) => isActive ? 'active' : ''}>
            Portfolio
        </NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>
            About
        </NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>
            Contact
        </NavLink>
    </nav>)

}
export default Navbar;
