import styles from "@/styles/FoodList.module.css";
import Image from "next/image";


const BeverageList = () => {
  return(
        <div className={styles.cardsWrapper}>
          <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image className={styles.categoryImage} src="/img/beverage.avif" layout="fill"></Image>
              </div>
              <h1 className={styles.categoryTitle}>BEVERAGES</h1>
          </div>
          <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image className={styles.categoryImage} src="/img/beverage.avif" layout="fill"></Image>
              </div>
              <h1 className={styles.categoryTitle}>BEVERAGES</h1>
          </div>
          <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image className={styles.categoryImage} src="/img/beverage.avif" layout="fill"></Image>
              </div>
              <h1 className={styles.categoryTitle}>BEVERAGES</h1>
          </div>
          <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image className={styles.categoryImage} src="/img/beverage.avif" layout="fill"></Image>
              </div>
              <h1 className={styles.categoryTitle}>BEVERAGES</h1>
          </div>
          <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image className={styles.categoryImage} src="/img/beverage.avif" layout="fill"></Image>
              </div>
              <h1 className={styles.categoryTitle}>BEVERAGES</h1>
          </div>
          <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image className={styles.categoryImage} src="/img/beverage.avif" layout="fill"></Image>
              </div>
              <h1 className={styles.categoryTitle}>BEVERAGES</h1>
          </div>
    
        </div>
  )
}

export default BeverageList;
