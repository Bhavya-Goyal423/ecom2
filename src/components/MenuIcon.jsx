import styles from "./MenuIcon.module.css";

export default function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={styles.menuIcon}
    >
      <path
        fill="#888888"
        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
      ></path>
    </svg>
  );
}
