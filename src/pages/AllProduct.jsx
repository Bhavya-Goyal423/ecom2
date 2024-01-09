import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import styles from "./AllProduct.module.css";

function AllProduct() {
  return (
    <div className={styles.containerGrid}>
      <Sidebar />
      <Products />
    </div>
  );
}

export default AllProduct;
