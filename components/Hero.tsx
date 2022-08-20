import { FC } from "react";
import Image from 'next/image';
import styles from "../styles/Hero.module.scss";

const Hero: FC = () => {
    return (
        <section id="home" className={styles.container}>
            <div className={styles.detail}>
                <div >
                    <h1> Different Spice For A Different Taste </h1>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        nulla enim posuere quis consequat.
                    </p>
                </div>

                <div>
                    <button className={styles.button}>GET STARTED</button>
                </div>
            </div>
            <div className={styles.image}>
                <Image src='/Slider Food Image.png' alt="" width="800" height="500" />
            </div>
        </section>
    )
}

export default Hero;