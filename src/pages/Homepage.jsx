import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
