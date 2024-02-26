import React from 'react'
import axios from 'axios'
import { add, remove } from '../Slices/CartSlice'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
//consts
import { URL } from "/Users/sacmahes/Desktop/My Projects/React and Redux practice/redux/src/constants.js"

import { useSelector } from 'react-redux'

function Products() {
    const disp = useDispatch()
    const [products, setProducts] = useState([])
    const [loading, setIsLoading] = useState(true)
    async function getProducts() {
        const response = await axios.get(URL)
        if (response.status === 200) {
            setProducts(response.data)
            setIsLoading(false)
        }
    }

    const itemsInCart = useSelector((store)=>store.Cart)

    const addToCart = (product)=>{
        disp(add(product))
    }

    const removeFromCart = (productID) => {
        disp(remove(productID))
    }

    useEffect(() => {
        getProducts()
    }, [])

    if (loading) {
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
                    {itemsInCart.some(obj => obj.id === id)?<button className="btn" style={{background:"Green"}} onClick={()=>removeFromCart(id)}>In Cart</button>:<button className="btn" onClick={()=>addToCart(product)}>Add to Cart</button>}
                </div>
            })}

        </div>
    )
}

export default Products