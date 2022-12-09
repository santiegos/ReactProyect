import { Link } from "react-router-dom";

// CARD PRODUCTOS

const Item = ({prod}) => {
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={`../img/${prod.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre} </h5>
                    <p className="card-text"> {prod.marca} </p>
                    <p className="card-text"> $ {new Intl.NumberFormat('de-DE').format(prod.precio)} </p>
                    <button className="btn btn-dark" ><Link to={`/product/${prod.id}`}> Ver Producto </Link></button>
                </div>
            </div>
        </>
    )
}

export default Item;
