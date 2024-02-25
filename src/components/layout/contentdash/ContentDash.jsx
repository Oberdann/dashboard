import Header from "../header"
import Analitycs from "./analitycs"
import Welcome from "./welcome"
import Graphs from "./graphs"

import styles from "./ContentDash.module.css"

function ContentDash() {
    return (
        <main className={styles.main_content}>
            <Header />
            <Analitycs />
            <Welcome />
            <Graphs />
        </main>
    )
}

export default ContentDash