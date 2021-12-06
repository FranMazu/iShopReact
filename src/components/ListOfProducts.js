import React from 'react';
import { useEffect, useState } from 'react';

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
            <div>
                <ul>
                    {!products ? 'Cargando....' : 
                        products.map((product, i) => {
                            return <li>{product.name}</li>
                        })
                    }
                </ul>
            </div>

        </React.Fragment>
    )
}

export default ListOfProducts