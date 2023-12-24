import styles from "../styles/Contact.module.css";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return(
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}


export default Layout;