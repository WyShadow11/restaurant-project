import styles from "../styles/Testimonal.module.css";
import Image from "next/image";

const Testimonal = () => {
  return(
    <div className={styles.container}>
      <div className={styles.titleText}>
          <h2 className={styles.heading}>Testimonial</h2>
          <h1 className={styles.title}>What They Say</h1>
        </div>
      <div className={styles.overlay}></div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image src="/img/avatar.png" width="64" height="64" className={styles.image}></Image>
          <div className={styles.text}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id optio, reprehenderit deleniti ipsa maxime iste nemo dolor impedit autem doloremque totam beatae eveniet ut dolorem dicta eum. Quaerat, nulla nobis!
            </p>
            <h3 className={styles.name}>John Doe</h3>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/img/avatar.png" width="64" height="64" className={styles.image}></Image>
          <div className={styles.text}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id optio, reprehenderit deleniti ipsa maxime iste nemo dolor impedit autem doloremque totam beatae eveniet ut dolorem dicta eum. Quaerat, nulla nobis!
            </p>
            <h3 className={styles.name}>John Doe</h3>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/img/avatar.png" width="64" height="64" className={styles.image}></Image>
          <div className={styles.text}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id optio, reprehenderit deleniti ipsa maxime iste nemo dolor impedit autem doloremque totam beatae eveniet ut dolorem dicta eum. Quaerat, nulla nobis!
            </p>
            <h3 className={styles.name}>John Doe</h3>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Testimonal;