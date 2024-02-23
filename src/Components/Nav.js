
import {NavLink} from 'react-router-dom'

import { useSelector } from 'react-redux'// this is a hook provided by redux to get the store data

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

    //useSelector accepts a callback function and gives as access to store to retrive store values
    const item = useSelector((store) => store.Cart) 

    return (
        <div style={navStyle}>
           
            <div style={margins}>
                <NavLink to="/">Home</NavLink>
            </div>
            <div style={margins}>
                <NavLink to="/cart">Cart</NavLink>
            </div >
            <div style={margins}>Cart Items {item.length}</div>
        </div>
    )
}
export default NavBar