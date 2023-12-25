import styles from "@/styles/FoodList.module.css";
import Image from "next/image";
import FoodCard from "../FoodCard";


const SushiList = ( {sushiList}) => {
    const newList = sushiList.filter((sushi) => sushi.category == "specialroll");
  return(
        <>
          {newList.map((sushi) => (
            <FoodCard key={sushi._id} sushi={sushi}></FoodCard>
          ))}
        </>);
}

export default SushiList;
