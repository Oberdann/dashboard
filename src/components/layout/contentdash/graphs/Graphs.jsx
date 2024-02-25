import CardsStatistic from "./cardsStatistics"

import imgGraphFirst from "../../../../assets/imgs/content/firstCard/graph.png"
import imgGraphSec from "../../../../assets/imgs/content/secundCard/graph.png"

import dto from "../../../../data/userStatisticDto"

import styles from "./Graphs.module.css"

function Graphs() {
    return (
        <section className={styles.graphs}>
            <div className={styles.sales_review}>
                <h3 className={styles.sales_titles}>Vendas: visão geral</h3>

                <h4 className={styles.sales_subTitle}> <strong >(+5%)</strong> mais em 2023</h4>

                <img src={imgGraphFirst} alt="Graficos das vendas gerais" className={styles.sales_graph} />
            </div>

            <div className={styles.users}>
                <img src={imgGraphSec} alt="Grafico dos usuarios" className={styles.user_graph} />

                <h3 className={styles.sales_titles}>Usuarios ativos</h3>

                <h4 className={`${styles.sales_subTitle} ${styles.users_strong}`}> <strong>(+23%)</strong> mais que semana passada</h4>

                <CardsStatistic dto={dto} />
            </div>
        </section>
    )
}

export default Graphs