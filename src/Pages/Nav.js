
import {NavLink} from 'react-router-dom'


function NavBar() {
    return (
        <div>
           
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/cart">Cart</NavLink>
            </div>
        </div>
    )
}
export default NavBar