import Sidebar from "../../layout/sidebar"
import ContentDash from "../../layout/contentdash";

import styles from "./Dashboard.module.css"

function Dashboard() {
    return (
        <div className={styles.div}>
            <Sidebar />
            <ContentDash />
        </div>
    )
}

export default Dashboard;