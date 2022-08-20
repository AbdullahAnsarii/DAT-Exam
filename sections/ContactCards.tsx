import { FC } from "react";
import styles from "../styles/ContactCards.module.scss";
import ContactsInterface from "../interfaces/Contacts";
import ContactCard from "../components/ContactCard";

const ContactCards: FC<{ contacts: ContactsInterface }> = ({ contacts }) => {
    return (
        <section className={styles.container}>
            {contacts.data.map(contact => (
                <ContactCard contact={contact} />
            ))}
        </section>
    )
}

export default ContactCards;