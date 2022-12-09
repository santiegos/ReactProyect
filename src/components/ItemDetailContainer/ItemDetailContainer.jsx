import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import consultarBDD from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        consultarBDD('../json/productos.json').then(produ => {
            const prod = produ.find(produ => produ.id === parseInt(id))
            setProducto(prod)
        })
        
    }, [id]);

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={producto} />
        </div>
    );
}

export default ItemDetailContainer;
