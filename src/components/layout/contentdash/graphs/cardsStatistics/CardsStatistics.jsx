import styles from "./CardsStatistic.module.css"

function CardsStatistics({ dto }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between"}}>
            {
                dto.map((data, index) => (
                    <div key={index} className={styles.card_user_statistics}>

                        <div className={styles.statisticsU}>
                            
                            <div className={styles.statisticsU_icon}> <data.icon /> </div>

                            <h4 className={styles.statisticsU_title}>{data.title}</h4>

                        </div>

                        <div className={styles.statisticsU_text_container}>

                            <p className={styles.statisticsU_text}>{data.text}</p>

                            <div className={styles.statisticsU_bar_container}>

                                <div className={styles.statisticsU_bar} style={{ width: `${data.bar}%`}}></div>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardsStatistics