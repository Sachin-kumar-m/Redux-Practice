
import {NavLink} from 'react-router-dom'

const navStyle  = {
    "display": "flex",
    "justifyContent": "flex-end",
    "backgroung": "",
    "height": "3rem",
    "alignItems": "center",
    "background":"whitesmoke"
  }
  
  const margins = {
      "margin": "1px 15px 0px 0px",
      "cursor": "pointer"
  }

function NavBar() {
    return (
        <div style={navStyle}>
           
            <div style={margins}>
                <NavLink to="/">Home</NavLink>
            </div>
            <div style={margins}>
                <NavLink to="/cart">Cart</NavLink>
            </div >
            <div style={margins}>Cart Items 0</div>
        </div>
    )
}
export default NavBar