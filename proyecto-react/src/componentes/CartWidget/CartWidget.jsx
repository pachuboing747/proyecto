import image from "./image/carro.svg"


const  CartWidget = () => {
    return (
        <div className="carrito">
            <img className="cart" src={image} alt="carro"/>
            0
        </div>
    )
}

export default CartWidget