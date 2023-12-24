import styles from "@/styles/FoodList.module.css";
import Image from "next/image";


const SushiList = () => {
  return(
        <div className={styles.cardsWrapper}>
          <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image className={styles.categoryImage} src="/img/food/alaskaRoll.png" layout="fill"></Image>
              </div>
              <div className={styles.cardtext}>
                <h1 className={styles.categoryTitle}>Alaska Roll</h1>
                <p className={styles.price}>
                  $13.95
                </p>
                <p className={styles.desc}>
                  In: Crabmeat mix, avocado, cucumber
                  Top: Salmon
                </p>
              </div>
          </div>
        </div>
  )
}

export default SushiList;
