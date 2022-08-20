import { FC } from "react";
import Image from "next/image";
import styles from "../styles/ContactCards.module.scss";
import ContactInterface from "../interfaces/Contacts";

const ContactCard: FC<{contact: ContactInterface}> = ({contact}) => {
    return (
        <div className={styles.card}>
            <Image src={contact.icon} width="50px" height="50px" />
            <p>{contact.description}</p>
            <h3>{contact.title}</h3>
        </div>
    )
}

export default ContactCard;