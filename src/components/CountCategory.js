import React from 'react';
import { useEffect, useState } from 'react';
import "../assets/css/countCategory.css"
function CountCategory(props) {

    const [categorys, setCategorys] = useState({ categorys: []})

    useEffect(() => {
        fetch('/api/products')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCategorys(data.categorys)
            })

    },[])



    return (
        <div className="box-categorys">
            <h1 className="categoryTitle">iPhones: <span className="categoryNumber">{categorys.iphoneCategory}</span></h1>
            <h1 className="categoryTitle">Auriculares: <span className="categoryNumber">{categorys.auricularesCategory}</span></h1>
            <h1 className="categoryTitle">Fundas: <span className="categoryNumber">{categorys.fundasCategory}</span></h1>
        </div>
    )
}

export default CountCategory;