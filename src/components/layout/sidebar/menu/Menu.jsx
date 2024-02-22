import { GiHouse } from "react-icons/gi";
import { FaChartColumn } from "react-icons/fa6";
import { BsCreditCardFill } from "react-icons/bs";

import styles from "./Menu.module.css"
import { Link } from "react-router-dom";

function Menu() {
    return (
        <ul className={styles.ul_container}>
            <li className={styles.icons_t}> <div className={`${styles.div_container} ${styles.test}`}> <GiHouse className={`${styles.icons} ${styles.tt}`} size={25} /> </div><Link>  <p>Dashboard</p> </Link></li>
            <li> <div className={styles.div_container}> <FaChartColumn className={styles.icons} size={25} /></div> <Link>  <p>Table</p> </Link> </li>
            <li> <div className={styles.div_container}> <BsCreditCardFill className={styles.icons} size={25} /></div> <Link> <p>Billing</p> </Link> </li>
        </ul>
    )
}

export default Menu;