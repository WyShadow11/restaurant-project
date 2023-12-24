import styles from "@/styles/FoodList.module.css";
import Image from "next/image";
import SushiCard from "../SushiCard";


const SushiList = ( {sushiList}) => {
  return(
        <div className={styles.cardsWrapper}>
          {sushiList.map((sushi) => (
            <SushiCard key={sushi._id} sushi={sushi}></SushiCard>
          ))}

        </div>
  )
}

export default SushiList;
