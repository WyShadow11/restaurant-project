import styles from "../styles/Location.module.css";
import Image from "next/image";

const Location = () => {
  return(
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <h1 className={styles.title}>Location</h1>
          <p className={styles.content}>Neque elit, rutrum in laoreet nec eget scelerisque volutpat sit. Bibendum tincidunt a scelerisque consectetur ultrices elementum pulvinar non. Leo ut id vel nec nisi odio nisi. Auctor egestas nibh augue enim, ornare blandit. Purus augue sagittis, risus phasellus egestas ipsum.</p>
        </div>
        <div className={styles.item}>
          <Image width="520" height="350" src="/img/location.jpeg"></Image>
          <div className={styles.text}>
            <b>Cozy Place</b>
           <p>To make everyone entering the establishment feel at home and find their atmosphere.</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.item}>
          <Image width="520" height="350" src="/img/location.jpeg"></Image>
          <div className={styles.text}>
            <b>Cozy Place</b>
            <p>To make everyone entering the establishment feel at home and find their atmosphere.</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image width="520" height="350" src="/img/location.jpeg"></Image>
          <div className={styles.text}>
            <b>Cozy Place</b>
            <p>To make everyone entering the establishment feel at home and find their atmosphere.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Location;