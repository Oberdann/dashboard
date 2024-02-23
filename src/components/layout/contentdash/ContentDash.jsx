import Header from "../header"
import Analitycs from "./analitycs"
import Welcome from "./welcome"

import styles from "./ContentDash.module.css"

function ContentDash() {
    return (
        <main className={styles.main_content}>
            <Header />
            <Analitycs />
            <Welcome />
        </main>
    )
}

export default ContentDash