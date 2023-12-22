import styles from "../styles/Signature.module.css";
import Image from "next/image";

const Signature = () => {
  return(
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.titleText}>
          <h2 className={styles.heading}>HOMEMADE</h2>
          <h1 className={styles.title}>Signature Menu</h1>
          <p className={styles.content}>Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non. </p>
      </div>
    </div>
  )
}


export default Signature;