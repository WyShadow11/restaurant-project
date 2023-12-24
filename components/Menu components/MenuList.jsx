import styles from "@/styles/MenuList.module.css";
import Image from "next/image";

const MenuList = () => {
  return(
        <div className={styles.cardsWrapper}>
          <a href="menu/beverages">
            <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image className={styles.categoryImage} src="/img/beverage.avif" layout="fill"></Image>
              </div>
              <h1 className={styles.categoryTitle}>BEVERAGES</h1>
            </div>
          </a>
          <a href="/menu/specialroll">
            <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image className={styles.categoryImage} src="/img/beverage.avif" layout="fill"></Image>
              </div>
              <h1 className={styles.categoryTitle}>Special Roll</h1>
            </div>
          </a>
        </div>
  )
}


export default MenuList;