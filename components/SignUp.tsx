import { FC } from "react";
import styles from "../styles/SignUp.module.scss";

const SignUp: FC = () => {
    return (
        <section className={styles.container}>
            <div>
                <h1>Receive payments quickly from anywhere</h1>
                <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.
                    Letter of on become he tended active enable to.</p>
            </div>
            <div>
                <p className={styles.redText}>Get Started for Free</p>
                <form>
                    <input className={styles.inputField} placeholder="Name" type="text" name="name" /><br />
                    <input className={styles.inputField} placeholder="Email Address" type="email" name="email" /><br />
                    <input className={styles.inputField} placeholder="Password" type="password" name="password" /><br />
                    <input className={styles.submitButton} type="submit" value="GET STARTED" />
                </form>
            </div>
        </section>
    )
}

export default SignUp;