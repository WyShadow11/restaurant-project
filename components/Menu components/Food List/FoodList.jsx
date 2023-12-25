
import FoodCard from "../FoodCard";


const FoodList = ( {foodList}) => {
    // const newCategory = window.location.pathname.split("/")
    const newList = foodList.filter((food) => food.category == "specialroll");
  return(
        <>
          {newList.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </>);
}

export default FoodList;
