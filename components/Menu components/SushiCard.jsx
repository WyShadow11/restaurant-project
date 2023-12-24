import styles from "@/styles/FoodList.module.css";
import Image from "next/image";
import Link from "next/link"


const SushiCard = ({sushi}) => {
  return(
          <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Link href={`/product/${sushi._id}`}>
                  <Image className={styles.categoryImage} src={sushi.img} layout="fill"></Image>
                </Link>
              </div>
              <div className={styles.cardtext}>
                <h1 className={styles.categoryTitle}>{sushi.title}</h1>
                <p className={styles.price}>
                  ${sushi.price}
                </p>
                <p className={styles.desc}>
                  {sushi.desc}
                </p>
              </div>
          </div>
  )
}

export default SushiCard;
