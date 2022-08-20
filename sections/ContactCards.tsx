import { FC } from "react";
import styles from "../styles/ContactCards.module.scss";
import ContactsInterface from "../interfaces/Contacts";
import ContactCard from "../components/ContactCard";

const ContactCards: FC<{ contacts: ContactsInterface }> = ({ contacts }) => {
    return (
        <section className={styles.container}>
            {contacts.data.map((contact, index) => (
                <ContactCard key={index} contact={contact} /> //using index as key because contact.id is not unique
            ))}
        </section>
    )
}

export default ContactCards;