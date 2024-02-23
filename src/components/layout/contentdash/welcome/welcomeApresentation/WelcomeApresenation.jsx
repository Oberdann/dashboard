import { FaArrowRight } from "react-icons/fa6";

import { Link } from "react-router-dom"

import styles from "./WelcomeApresentation.module.css"

function WelcomeApresentation({ user }) {
    return (
        <div className={styles.container_apresentation}>
            <div>
                <h4 className={styles.title}>  Bem vindo de volta, </h4>

                <h3 className={styles.name_user}> {user.name} </h3>

                <p className={styles.text}> Feliz em ver você novamente!<br />Pergunte-me qualquer coisa</p>
            </div>

            <Link className={styles.link}> Toque para gravar <FaArrowRight style={{ marginLeft: ".5em" }} /> </Link>
        </div>
    )
}

export default WelcomeApresentation