import { FC } from "react";
import Image from "next/image";
import styles from "../styles/ContactCards.module.scss";

const ContactCards: FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <Image src='/Calendar.png' width="50px" height="50px" />
                <h3>Mon Fri : 10AM -9:30PM</h3>
                <p>Working Hours</p>
            </div>
            <div className={styles.card}>
                <Image src='/Calendar.png' width="50px" height="50px" />
                <h3>Mon Fri : 10AM -9:30PM</h3>
                <p>Working Hours</p>
            </div>
            <div className={styles.card}>
                <Image src='/Calendar.png' width="50px" height="50px" />
                <h3>Mon Fri : 10AM -9:30PM</h3>
                <p>Working Hours</p>
            </div>
        </section>
    )
}

export default ContactCards;