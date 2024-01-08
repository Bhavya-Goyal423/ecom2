import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import DropdownNavbar from "./DropdownNavbar";
import OrderIcon from "./OrderIcon";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { currentUser, logOutUser } = useUser();

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
            {!currentUser ? (
              <NavLink className={styles.navlink} to={"user/signin"}>
                <UserIcon />
                Sign In
              </NavLink>
            ) : (
              <div
                className={styles.navlink}
                style={{ cursor: "pointer" }}
                to={"user/signin"}
                onClick={logOutUser}
              >
                <UserIcon />
                Sign Out
              </div>
            )}
          </li>
        </ul>
        <DropdownNavbar />
      </nav>
    </div>
  );
}

export default Navbar;
