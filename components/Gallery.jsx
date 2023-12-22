import styles from "../styles/Gallery.module.css";
import Image from "next/image";

const Gallery = () => {
  return(
    <div className={styles.container}>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery.jpg" layout="fill"></Image>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery.jpg" layout="fill"></Image>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery.jpg" layout="fill"></Image>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery.jpg" layout="fill"></Image>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery.jpg" layout="fill"></Image>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery.jpg" layout="fill"></Image>
      </div>
    </div>
  )
}


export default Gallery;
