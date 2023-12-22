import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return(
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/logo.png" width="200" height="60"></Image>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>About Us</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Testimonial</li>
          <li className={styles.listItem}>Contact</li>
          <li className={styles.listItem}>Order</li>
        </ul>
      </div>
    </div>
  )
}


export default Navbar;