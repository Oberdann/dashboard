import Header from "./header"
import Analitycs from "./analitycs"

import styles from "./ContentDash.module.css"

function ContentDash() {
    return (
        <main className={styles.main_content}>
            <Header />
            <Analitycs />
        </main>
    )
}

export default ContentDash