import { useSelector } from "react-redux"

import { remove } from "../Slices/CartSlice"
import { useDispatch } from "react-redux"
function CartComponent() {

    const cartData = useSelector((store) => store.Cart)
    
    const dispath = useDispatch()
    const handleRemove = (productID) => {
        dispath(remove(productID))
    }
    
    if (cartData.length===0) return <div className="cart"><h1>Empty Cart</h1></div>
    

    return (
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 60, marginTop: 20, paddingBottom: 30 }}>
            {cartData.map((cartData) => {
                const { title, image, id } = cartData
                return <div className="products" key={id} style={{ width: 300, height: 450 }}>
                    <div style={{ margin: "auto", width: 190, height: 300, background: `url(${image})`, display: "flex", alignContent: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'auto', WebkitBackgroundSize: "contain", flexDirection: "column-reverse", backgroundPosition: "center", mixBlendMode: "darken" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column-end", }}>
                        </div>
                    </div>
                    <div style={{ height: 40, overflow: "hidden", width: 250 }}>{title}</div>
                    <button className="btn" onClick={()=>handleRemove(id)}>Remove</button>
                </div>
            })}

        </div>
    )
}

export default CartComponent