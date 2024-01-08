import DropdownNavbar from "./DropdownNavbar";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import OrderIcon from "./OrderIcon";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";

function Navbar() {
  return (
    <div className={styles.nav}>
      <NavLink className={` ${styles.logo}`} to={"/"}>
        Busy Buy
      </NavLink>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItems}>
            <NavLink className={styles.navlink} to={"orders"}>
              <OrderIcon />
              My Orders
            </NavLink>
          </li>
          <li className={styles.navItems}>
            <NavLink className={styles.navlink} to={"cart"}>
              <CartIcon />
              Cart
            </NavLink>
          </li>
          <li className={styles.navItems}>
            <NavLink className={styles.navlink} to={"user/signin"}>
              <UserIcon />
              Sign In
            </NavLink>
          </li>
        </ul>
        <DropdownNavbar />
      </nav>
    </div>
  );
}

export default Navbar;
