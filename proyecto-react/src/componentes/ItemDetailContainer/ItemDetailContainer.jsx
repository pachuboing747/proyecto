import { useEffect, useState } from "react";
import { getProduct } from "../Request data/Request data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer =() =>{
    const [item, setItem] = useState(null)
    const id = useParams().id;

    useEffect(()=>{
        getProduct(Number(id))
        .then((res)=>{
            setItem(res);
        })

    }, [id])


    return(
        <div>
        {item && <ItemDetail item={item}/>}
        </div>
    )
   
}

export default ItemDetailContainer