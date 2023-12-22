import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return(
    <div className={styles.container}>
      <div class={styles.topHeader}>
        <div class={styles.contactinfo}>
          <p>
            Reservations encouraged, walk-ins welcome. Please call 
            (469) 564-8588
            or reserve online.
          </p>
        </div>
      </div>
      <div className={styles.mainHeader}>
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
    </div>
  )
}


export default Navbar;