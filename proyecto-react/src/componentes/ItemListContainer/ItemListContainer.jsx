import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { requestData } from "../Request data/Request data"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) =>{
    const [lista, setLista] = useState([])
    const categoria = useParams().categoria
    const [titulo, setTitulo ] = useState("productos")
   

    useEffect(() =>{
        requestData()
        .then(respuesta =>{
            if (categoria){
                setLista(respuesta.filter((prod) => prod.categoria == categoria));
                setTitulo(categoria)
            }else{
                setLista(respuesta);
                setTitulo("Productos")
            }
        })
    },[categoria])


    return(
        <div className="card">
            <h2>{greeting}</h2>
            <ItemList lista={lista} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer