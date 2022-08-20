import Image from "next/image";
import { FC, useState, useEffect } from "react";
import styles from "../styles/Menu.module.scss";
import {CategoriesInterface} from "../interfaces/Menu";
import CarouselSlideItem from "../components/CarouselSlideItem";

const Menu: FC<{ categories: CategoriesInterface }> = ({ categories }) => {
    const [activeTab, setActiveTab] = useState("pizza");
    const _items = [
        {
            id: "1",
            slug: "margherita",
            title: "Margherita",
            category: "pizza",
            image: "http://54.169.31.224:3000/uploads/food/pizza/11.jpg",
            price: 3.2,
            currency: "$",
            availableQuantity: 10
        },
        {
            id: "2",
            slug: "cheeky-chicken",
            title: "Cheeky Chicken",
            category: "pizza",
            image: "http://54.169.31.224:3000/uploads/food/pizza/12.jpg",
            price: 2.5,
            currency: "$",
            availableQuantity: 14
        },
        {
            id: "3",
            slug: "hot-stuff",
            title: "Hot stuff",
            category: "pizza",
            image: "http://54.169.31.224:3000/uploads/food/pizza/13.jpg",
            price: 6.5,
            currency: "$",
            availableQuantity: 5
        },
        {
            id: "4",
            slug: "classic-pepproni",
            title: "Classic Pepproni",
            category: "pizza",
            image: "http://54.169.31.224:3000/uploads/food/pizza/14.jpg",
            price: 7,
            currency: "$",
            availableQuantity: 2
        },
        {
            id: "5",
            slug: "cheeky-chicken",
            title: "Cheeky Chicken",
            category: "pizza",
            image: "http://54.169.31.224:3000/uploads/food/pizza/15.jpg",
            price: 4.2,
            currency: "$",
            availableQuantity: 9
        },
        {
            id: "6",
            slug: "spicy-cheeky-chicken",
            title: "Spicy Cheeky Chicken",
            category: "pizza",
            image: "http://54.169.31.224:3000/uploads/food/pizza/16.jpg",
            price: 5.2,
            currency: "$",
            availableQuantity: 10
        }
    ]

    _items.push(..._items);
    const keys = Array.from(Array(_items.length).keys());
    const [items, setItems] = useState(keys);
    const [isTicking, setIsTicking] = useState(false);
    const bigLength = items.length;
    const sleep = (ms = 0) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    
    return (
        <section id="menu">

            <div className={styles.intro}>
                <h1>Our Popular Menu</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet tempus dolor sed auctor. Volutpat facilisi in imperdiet quam penatibus ut</p>
            </div>
            <div className={styles.tabs}>
                {categories.data.map((category, index) => (
                    <button id={(activeTab == category.slug) ? styles.active: undefined}  onClick={() => setActiveTab(category.slug)} key={index}>
                        <Image src={category.icon} width='40px' height='40px' />
                        <span style={{ fontSize: 20 }}>{category.name}</span>
                    </button>
                ))}
            </div>


            <div className={styles.carouselwrap}>
                <div className={styles.carouselInner}>
                    <button className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`} onClick={() => prevClick()}>
                        <i className={`${styles.carouselBtnArrow} ${styles.carouselBtnArrowLeft}`} />
                    </button>
                    <div className={styles.carouselContainer}>
                        <ul className={styles.carouselSlideList}>
                            {items.map((pos, i) => (
                                <CarouselSlideItem
                                    key={i}
                                    idx={i}
                                    pos={pos}
                                />
                            ))}
                        </ul>
                    </div>
                    <button className={`${styles.carouselBtn} ${styles.carouselBtnNext}`} onClick={() => nextClick()}>
                        <i className={`${styles.carouselBtnArrow} ${styles.carouselBtnArrowRight}`} />
                    </button>
                </div>
            </div>
            
        </section>
    )
}

export default Menu;