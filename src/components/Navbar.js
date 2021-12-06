import React from 'react';
import Card from "./Card";
import CountCategory from './CountCategory';
import LastProduct from './LastProduct';
import ListOfProducts from './ListOfProducts';
import "../assets/css/navbar.css"
import "../assets/css/card.css"
import { useEffect , useState} from 'react';

function Navbar() {

    const [infoDataBase, setInfoDataBase] = useState({ products: [] });
    const [infoDataBaseUser, setInfoDataBaseUser] = useState({ users: [] });
    
    useEffect(() => {
        fetch('/api/products')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setInfoDataBase(data)
                fetch('/api/users')
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        setInfoDataBaseUser(data)
                    })
            })

    },[])

    
    return (
        <React.Fragment>
			<div className="container">
                <Card title="Productos" quantity={infoDataBase.count} color="primary" icon="fas fa-user"/>
                <Card title="Usuarios" quantity={infoDataBaseUser.count} color="warning" icon="fas fa-user"/>
                <Card title="Categorias" quantity="3" color="primary" icon="fas fa-user"/>
            </div>
            <hr/>
            <div className="container-two">
                <CountCategory />
                <ListOfProducts />
                <LastProduct />
            </div>
        </React.Fragment>
    )
}

export default Navbar