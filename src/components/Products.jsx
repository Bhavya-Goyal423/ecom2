import InputBox from "./InputBox";
import ProductCard from "./ProductCard";
import styles from "./Products.module.css";
import SearchIcon from "./SearchIcon";

function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <InputBox />
        <SearchIcon />
      </div>
      <div className={styles.products}>
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
