import styles from "./InputBox.module.css";

function InputBox() {
  return (
    <input
      type="search"
      placeholder="Search By Name"
      className={styles.inputBox}
    />
  );
}

export default InputBox;
