import styles from "@/styles/FoodList.module.css";
import Image from "next/image";
import FoodCard from "../FoodCard";


const SushiList = ( {sushiList}) => {
    sushiList.map((sushi) =>{
      if (sushi.category === "sushi")
      return(
        <div className={styles.cardsWrapper}>
           <FoodCard key={sushi._id} sushi={sushi}></FoodCard>
          </div>)
    })


  return(
        <div className={styles.cardsWrapper}>
          {sushiList.map((sushi) => (
            <FoodCard key={sushi._id} sushi={sushi}></FoodCard>
          ))}

        </div>
  )
}

export default SushiList;
