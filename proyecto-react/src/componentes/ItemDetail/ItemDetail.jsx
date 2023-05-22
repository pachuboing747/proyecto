const ItemDetail = ({item}) =>{
    return(
        <div>
            <img src={item.img} alt={item.nombre}/>
            <div>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <p>{item.precio}</p>
            </div>
        </div>
    )
}

export default ItemDetail