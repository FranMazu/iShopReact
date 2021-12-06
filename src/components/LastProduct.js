import { useState, useEffect } from "react";
import React from "react"
import "../assets/css/lastProduct.css"
function LastProduct() {
    const [lastProduct, setLastProduct] = useState({ lastProduct: []})

    useEffect(() => {
        fetch('/api/products')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setLastProduct(data.lastProduct)
            })

    },[])

    let url = "http://localhost:3080/images/products/"
    return (
        <React.Fragment>
        <div>
            <h1 className="title-last-product">Ultimo producto agregado</h1>
            <h1>{lastProduct.name}</h1>
            <h1>{lastProduct.price}</h1>
            <img src={url + lastProduct.image} alt="imagén last-product"></img>
        </div>    
        </React.Fragment>
    
    )
}

export default LastProduct;