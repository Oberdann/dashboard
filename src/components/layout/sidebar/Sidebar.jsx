import Menu from "./menu"

import styles from "./Sidebar.module.css"

function Sidebar() {
    return (
        <nav className={styles.navbar}>

            <div className={styles.div_title}>

                <h3 className={styles.title}>VISION UI FREE</h3>

            </div>

            < Menu />
            
        </nav>
    )
}

export default Sidebar