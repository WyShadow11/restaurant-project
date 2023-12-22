import styles from "../styles/ContactHero.module.css";
import Image from "next/image";

const ContactHero = () => {
  return(
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Contact Us</h1>
        <p>For inquiries, reservations, or any assistance, please don't hesitate to contact our team. We look forward to serving you with excellence.</p>
        
      </div>
    </div>
  )
}


export default ContactHero;