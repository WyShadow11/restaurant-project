import styles from "@/styles/MenuList.module.css";
import Image from "next/image";
import SushiList from "./Food List/SushiList";
import Head from 'next/head'
import axios from 'axios'
import { Inter } from 'next/font/google'
import MenuList from '@/components/Menu components/MenuList'
import BeverageList from '@/components/Menu components/Food List/BeverageList'




export const MenuNavBar = ( {children}) => {
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
          <a href="#">Dessert</a>
          <a href="#">Special Roll</a>
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
        <div className={styles.search}>
          <input type="text" placeholder="Search"/>
          <button className={styles.searchbtn}>Search</button>
        </div>

        <div className={styles.cartbtn}>
        </div>
        <div className={styles.cardsWrapper}>
          {children}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      foodList: res.data, 
    }
  }
}

export default MenuNavBar;


