import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link to="/"><div className="logo-container"><CrwnLogo className="logo"/></div></Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">Shop</Link>
            <Link className="nav-link" to="/signin">Signin</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
