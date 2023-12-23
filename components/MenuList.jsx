import styles from "../styles/MenuList.module.css";
import Image from "next/image";

const MenuList = () => {
  return(
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarHeaderTitle}>READY TO ORDER?</h2>
          <button className={styles.orderbtn}>ORDER NOW</button>
        </div>
        <div className={styles.sidebarMenus}>
          <a href="#">Appetizer</a>
          <a href="#">Sushi-Appetizer</a>
          <a href="#">Soup</a>
          <a href="#">Salad</a>
          <a href="#">Roll</a>
          <a href="#">Sushi/Sashimi</a>
          <a href="#">Dessert</a>
          <a href="#">Special Roll</a>
          <a href="#">Sushi-Entree</a>
          <a href="#">Yaki Udon</a>
          <a href="#">Yaki Soba</a>
          <a href="#">D-Hib</a>
          <a href="#">D-Hib Kids</a>
          <a href="#">D-Hib Special</a>
          <a href="#">Teriyaki</a>
          <a href="#">Beverage</a>
          <a href="#">D-Hib Side</a>
        </div>
      </div>
      <div className={styles.main}>
      <div className={styles.search}>
        <input type="text" placeholder="Search"/>
        <button className={styles.searchbtn}>Search</button>
      </div>
      </div>
      
      
    </div>
  )
}


export default MenuList;