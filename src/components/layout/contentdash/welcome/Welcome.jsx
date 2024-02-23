import WelcomeApresentation from "./welcomeApresentation"
import WelcomeRate from "./welcomeRate/WelcomeRate"
import WelcomeTracking from "./welcomeTracking/WelcomeTracking"


import styles from "./Welcome.module.css"


function Welcome() {
    return (
        <section className={styles.container}>
            <WelcomeApresentation user={{ name: "Carl Jhoson" }} />
            <WelcomeRate />
            <WelcomeTracking  dto={{ amountPeopleInvite: "145", bonus: "1,465", percentage: "9.3" }} />
        </section>
    )
}

export default Welcome