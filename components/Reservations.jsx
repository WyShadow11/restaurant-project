import styles from "../styles/Reservations.module.css";
import Image from "next/image";

const Reservations = () => {
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Reservation</h1>
      <p className={styles.content}>Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non.</p>
      <button>BOOK A TABLE NOW</button>
      <h2 className={styles.subheader}>TELEPHONE RESERVATIONS</h2>
      <b className={styles.phone}>12 34 56 7890</b>
    </div>
  )
}


export default Reservations;