import { FC } from "react";
import Image from 'next/image';
import styles from "../styles/Hero.module.scss";

const Hero: FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.detail}>
                <div >
                    <h1 className={styles.heading}> Different Spice For A Different Taste </h1>
                </div>
                <div>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        nulla enim posuere quis consequat.
                    </p>
                </div>

                <div>
                    <button className={styles.button}>Get Started</button>
                </div>
            </div>
            <div className={styles.image}>
                <Image src='/Slider Food Image.png' alt="" width="800" height="500" />
            </div>
        </section>
    )
}

export default Hero;