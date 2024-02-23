import { BsThreeDots } from "react-icons/bs";

import { Link } from "react-router-dom"

import styles from "./WelcomeTracking.module.css"

function WelcomeTracking({ dto }) {
    return (
        <div className={styles.container}>

            <div className={styles.title_headers}>
                <h3 className={styles.title}>Rastreio de referência</h3>
                <div className={styles.div_link}>
                    <Link><BsThreeDots /></Link>
                </div>
            </div>

            <div className={styles.container_content}>

                <div className={styles.container_cards}>
                    <div className={styles.card}>
                        <h4 className={styles.card_subTtile}>Pessoas convidadas</h4>
                        <h3 className={styles.card_title}>{dto.amountPeopleInvite} pessoas</h3>
                    </div>

                    <div className={styles.card}>
                        <h4 className={styles.card_subTtile}>Bonus</h4>
                        <h3 className={styles.card_title}>{dto.bonus}</h3>
                    </div>
                </div>

                <div className={styles.container_percentage}>
                    <h4 className={styles.percentage_subTitle}>Segurança</h4>
                    <h3 className={styles.percentage_title}>{dto.percentage}</h3>
                    <p className={styles.percentage_subTitle}>Pontuação total</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeTracking