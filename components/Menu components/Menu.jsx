import styles from "@/styles/Menu.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";

export const Menu = ( {children}) => {
  const quantity = useSelector(state => state.cart.quantity)
  return(
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarHeaderTitle}>READY TO ORDER?</h2>
          <button className={styles.orderbtn}>ORDER NOW</button>
        </div>
        <div className={styles.sidebarMenus}>
          <a href="/menu">All Categoies</a>
          <a href="#">Appetizer</a>
          <a href="#">Sushi-Appetizer</a>
          <a href="#">Soup</a>
          <a href="#">Salad</a>
          <a href="#">Roll</a>
          <a href="#">Sushi/Sashimi</a>
          <a href="/specialroll">Dessert</a>
          <a href="/menu/specialroll">Special Roll</a>
          <a href="#">Sushi-Entree</a>
          <a href="#">Yaki Udon</a>
          <a href="#">Yaki Soba</a>
          <a href="#">D-Hib</a>
          <a href="#">D-Hib Kids</a>
          <a href="#">D-Hib Special</a>
          <a href="#">Teriyaki</a>
          <a href="/beverages">Beverage</a>
          <a href="#">D-Hib Side</a>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainNavBar}>
          <div className={styles.search}>
            <input type="text" placeholder="Search"/>
            <button className={styles.searchbtn}>Search</button>
          </div>
        </div>
        <div className={styles.cardsWrapper}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Menu;


