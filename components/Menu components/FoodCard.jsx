import styles from "@/styles/FoodCard.module.css";
import Image from "next/image";
import Link from "next/link"


const FoodCard = ({food}) => {
  return(
          <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Link href={`/product/${food._id}`}>
                  <Image className={styles.categoryImage} src={food.img} layout="fill"></Image>
                </Link>
              </div>
              <div className={styles.cardtext}>
                <h1 className={styles.categoryTitle}>{food.title}</h1>
                <p className={styles.price}>
                  ${food.price}
                </p>
                <p className={styles.desc}>
                  {food.desc}
                </p>
              </div>
          </div>
  )
}

export default FoodCard;
