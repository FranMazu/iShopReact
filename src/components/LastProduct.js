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
        <div className="box-lastProduct">
            <div>
                <h1 className="title-last-product">Ultimo producto agregado</h1>
                <h2 className="titleProduct">{lastProduct.name}</h2>
                <h1 className="priceProduct">$ {lastProduct.price}</h1>
            </div>
            <div className="box-img">
                <img src={url + lastProduct.image} alt="imagén last-product" className="img-lastProduct"></img>
            </div>
        </div>    
        </React.Fragment>
    
    )
}

export default LastProduct;