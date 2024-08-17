import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./CartIcon.scss";
function CartIcon() {
    const cartCTX = useContext(CartContext);
    let {isCartOpen,setIsCartOpen} = cartCTX
    
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon
