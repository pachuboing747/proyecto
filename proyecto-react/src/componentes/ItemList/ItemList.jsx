import Item from "../Item/Item"
import {CapitalLetter} from "../CapitalLetter/CapitalLetter"

const ItemList = ({lista, titulo}) =>{
    
    return(
        <div className="a">
            <h2>{CapitalLetter(titulo)}</h2>
            <div className="ab">
            {lista.map((list )=> <Item lista = {list} key={list.id}/>)}
            </div>
        </div>
    )
}

export default ItemList 