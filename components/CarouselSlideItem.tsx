import { FC } from "react";
import Image from "next/image";
import styles from "../styles/Menu.module.scss";
import { CarouselSlideInterface } from "../interfaces/Menu";

const CarouselSlideItem: FC<CarouselSlideInterface> = ({ pos, idx }) => {
    const slideWidth = 17;
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
    const createItem = (position: number, idx: number) => {
        const item = {
            styles: {
                transform: `translateX(${position * slideWidth}rem)`,
            },
            dish: _items[idx],
        };
        return item;
    };
    const item = createItem(pos, idx);
    return (
        <li className={styles.carouselSlideItem} style={item.styles}>
            <div className={styles.carouselSlideItemImgLink}>
                <Image className={styles.carouselSlideItemImage} src={item.dish.image} alt={item.dish.title} height='600px' width='600px' />
            </div>
            <div className={styles.carouselSlideItemBody}>
                <p>{item.dish.title}</p>
                <p><span>{item.dish.currency}</span>&nbsp;{item.dish.price}</p>
                <p><button
                    onClick={() => alert("hooray")}
                    className={styles.cart}
                >
                    Add to cart
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                    >
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                </button>
                </p>
            </div>
        </li>
    );
}

export default CarouselSlideItem;