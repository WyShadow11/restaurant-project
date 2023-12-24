import styles from "@/styles/Contact.module.css";
import Image from "next/image";

const Contact = () => {
  return(
    <div className={styles.container}>
      <div class={styles.googleMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.996455098574!2d-96.6639553237807!3d33.21418916151547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c134e9c30eecd%3A0xbe177ac04987236c!2sKyoto%20Hibachi%20Sushi%20%26%20Bar!5e0!3m2!1sen!2sus!4v1700022755418!5m2!1sen!2sus" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className={styles.contact}>
        <h1 className={styles.title}>Send Us A Message</h1>
        <p>We would be thrilled to hear from you!</p>
        <form>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input type="text" placeholder="John Doe" className={styles.input}/>
          </div>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="text" placeholder="JohnDoe@gmail.com" className={styles.input}/>
          </div>
          <div className={styles.inputGroup}>
            <label>Phone</label>
            <input type="text" placeholder="123-456-7890" className={styles.input}/>
          </div>
          <div className={styles.inputGroup}>
            <label>Subject</label>
            <input type="text" placeholder="Subject" className={styles.input}/>
          </div>

          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea type="text" placeholder="Your message here" className={styles.input}></textarea> 
          </div>
          
        </form>
      </div>
      
    </div>
  )
}


export default Contact;