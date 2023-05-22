import { useState } from "react"



const ItemCount = ({stock, inicial, agregar}) =>{
    const[cantidad, setCantidad] = useState(inicial)

    const incrementar = () => {
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }
    const disminucion = () =>{
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div>
            <div >
                <button onClick={disminucion}>-</button>
                <h4>{cantidad}</h4>
                <button  onClick={incrementar}>+</button>
            </div>
            <div>
                <button onClick={()=>agregar(cantidad)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
    
}
export default ItemCount