import analitycsDto from "../../../../data/AnalitycsDto"

import styles from "./Analitycs.module.css"

function Analitycs() {

    return (
        <div className={styles.analitycs_cards}>
            {
                analitycsDto.map((data, index) => {
                    let colorPercentage = data.percentage[0] === "+" ? "#01B574" : "#E31A1A"

                    return <div className={styles.card}>
                        <div>
                            <h3 className={styles.title}>{data.title}</h3>

                            <div className={styles.text_container}>
                                <p className={styles.text}>{data.text}</p>

                                <p className={styles.percentage} style={{ color: colorPercentage }}>{data.percentage}</p>
                            </div>
                        </div>

                        <div className={styles.icon_container}>
                            <data.icon key={index} size={20} />
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Analitycs