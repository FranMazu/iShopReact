import React from 'react';
import { useEffect, useState } from 'react';
import '../assets/css/listOfProducts.css'
function ListOfProducts(props) {

    const [products, setProducts] = useState()

    const fetchApi = async () => {
        const response = await fetch('/api/products')
        const responseJSON = await response.json()
        console.log(responseJSON)
        setProducts(responseJSON.products)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <React.Fragment>
            <div className="box-listProducts">
                <h1 className="titleList">Productos en DB</h1>
            
                <ul>
                    {!products ? 'Cargando....' : 
                        products.map((product, i) => {
                            return <li className="listProduct">{product.name}</li>
                        })
                    }
                </ul>
            </div>

        </React.Fragment>
    )
}

export default ListOfProducts