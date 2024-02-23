import { CgSmileMouthOpen } from "react-icons/cg";

import styles from "./WelcomeRate.module.css"

function WelcomeRate() {

    return (
        <div className={styles.container}>

            <div>
                <h3 className={styles.title}>Taxa de satisfação</h3>

                <h4 className={styles.subTitle}>de todas as pessoas</h4>
            </div>

            <div className={styles.content_container}>

                <div className={styles.icon_container}> <CgSmileMouthOpen size={25} /> </div>
                
                <div className={styles.statistics}>
                    <div className={styles.percentage}> 0%</div>

                    <div className={styles.percentage_likes}><p>95% <strong>gosteis</strong></p></div>

                    <div className={styles.percentage}> 100%</div>
                </div>

            </div>

        </div>
    )
}

export default WelcomeRate