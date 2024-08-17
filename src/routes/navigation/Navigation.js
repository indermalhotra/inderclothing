import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import "./navigation.styles.scss"
import { signOutUser } from "../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";


function Navigation() {
  const userCTX = useContext(UserContext);
  const cartCTX = useContext(CartContext);

  let isCartOpen = cartCTX.isCartOpen;

  console.log(cartCTX);

  const signOutHandler = async () =>{
    const res = await signOutUser();
    console.log(res)
    userCTX.setCurrentUser(null)
  }

  return (
    <>
      <div className="navigation">
        <Link to="/"><div className="logo-container"><CrwnLogo className="logo"/></div></Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">Shop</Link>
            {userCTX.currentUser ? <span className="nav-link" onClick={signOutHandler}>Sign Out</span> : <Link className="nav-link" to="/auth">Sign In</Link>}
            <CartIcon/>
        </div>
      </div>
      {isCartOpen && <CartDropdown/>}
      <Outlet />
    </>
  );
}

export default Navigation;
