import { FC } from "react";
import styles from "../styles/Footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={styles.container}>
            <p>Copyright @ {(new Date()).getFullYear().toString()} abcd. All Right Reserved.</p>
        </footer>
    )
}

export default Footer;