import React from 'react'

import { add, remove } from '../Slices/CartSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from "react"
//consts


import { useSelector } from 'react-redux'
import { fetchProducts } from '../Slices/ProductSlice'


function Products() {
    const disp = useDispatch()
   
    async function getProducts() {
       disp(fetchProducts()) // this is a function/reducer return in product slice. 
    }
    const products = useSelector(store=>store.Product.data)
    const loading = useSelector(store=>store.Product.status)
    const itemsInCart = useSelector((store)=>store.Cart)

    const addToCart = (product)=>{
        disp(add(product))
        console.log(product.title ,"=> Added to Cart");
    }

    const removeFromCart = (productID) => {
        disp(remove(productID))
        console.log(productID ,"=> Removed from Cart");
    }

    useEffect(() => {
        getProducts()
    },[])

    if (loading==="LOADING") {
        return <div className="loading">
            <h2>Loading.....</h2>
        </div>
    }
    return (

        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 60, marginTop: 20, justifyContent: "center", paddingBottom: 30 }}>
            {products.map((product) => {
                const { title, price, image, id } = product
                return <div className="products" key={id} style={{ width: 300, height: 450 }}>
                    <div style={{ margin: "auto", width: 190, height: 300, background: `url(${image})`, display: "flex", alignContent: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'auto', WebkitBackgroundSize: "contain", flexDirection: "column-reverse", backgroundPosition: "center", mixBlendMode: "darken" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column-end", }}>
                        </div>
                    </div>
                    <div style={{ height: 40, overflow: "hidden", width: 250 }}>{title}</div>
                    <div style={{ fontWeight: "bold" }}>₹ {price * 100}</div>
                    {itemsInCart.find(obj => obj.id === id)?<button className="btn remove" style={{background:"Green"}} onClick={()=>removeFromCart(id)}>In Cart</button>:<button className="btn" onClick={()=>addToCart(product)}>Add to Cart</button>}
                </div>
            })}

        </div>
    )
}

export default Products