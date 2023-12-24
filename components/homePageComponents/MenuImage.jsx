import styles from "@/styles/Menu.module.css";
import Image from "next/image";

const MenuImage = () => {
  return(
    <>
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/img/menu1.jpg" layout="fill"></Image>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/img/menu2.jpg" layout="fill"></Image>
      </div>
    </div>
    </>
  )
}


export default MenuImage;