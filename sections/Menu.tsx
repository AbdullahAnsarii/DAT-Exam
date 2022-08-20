import Image from "next/image";
import { FC, useState, useEffect } from "react";
import styles from "../styles/Menu.module.scss";
import { CategoriesInterface } from "../interfaces/Menu";
import CarouselSlideItem from "../components/CarouselSlideItem";
import LoadingCarouselSlide from "../components/LoadingCarouselSlide";

const Menu: FC<{ categories: CategoriesInterface }> = ({ categories }) => {

    const [activeTab, setActiveTab] = useState("pizza");
    const [_items, set_Items]: any = useState([]);
    const [keys, setKeys] = useState(Array.from(Array(_items.length).keys()));
    const [items, setItems] = useState(keys);
    const [isTicking, setIsTicking] = useState(false);
    const [bigLength, setBigLength] = useState(items.length);
    
    useEffect(() => {
        set_Items([]);
        fetch(`http://54.169.31.224:3000/category/${activeTab}`)
            .then(async (res) => {
                await res.json().then(response => {
                    console.log(response, 'ers');
                    set_Items(response.data);
                    //since we wouldn't get the updated state immediately
                    const _temp = Array.from(Array(response.data.length).keys());
                    setKeys(_temp);
                    setItems(_temp)
                    setBigLength(_temp.length);
                });
            })
    }, [activeTab])

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
                    <button id={(activeTab == category.slug) ? styles.active : undefined} onClick={() => setActiveTab(category.slug)} key={index}>
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
                            {_items.length > 1 ? items.map((pos, i) => (
                                <CarouselSlideItem
                                    key={i}
                                    idx={i}
                                    pos={pos}
                                    _items={_items}
                                />
                            )) : <LoadingCarouselSlide />}
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