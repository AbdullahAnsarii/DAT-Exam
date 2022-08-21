import { Dispatch, FC, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { MenuItem } from "../interfaces/Menu";
import Cart from "../components/Cart";

const Navbar: FC<{ cart: MenuItem[], setCart: Dispatch<SetStateAction<MenuItem[]>> }> = ({ cart, setCart }) => {
    const [activeNav, setActiveNav] = useState("home");
    const [showCart, setShowCart] = useState(false);

    const outsideListener = (ref: RefObject<HTMLInputElement>) => {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowCart(false); // if clicked outside cart then hide the cart
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const cartRef = useRef(null);
    outsideListener(cartRef);

    return (
        <header className={styles.header}>
            <div>
                <Image src="/LogoWithText.png" width="150" height="50" />
            </div>

            <div className={styles.topnav}>
                <Link href="/">
                    <a
                        onClick={() => setActiveNav("home")}
                        id={activeNav == "home" ? styles.active : undefined}>Home</a>
                </Link>
                <Link href="#form" >
                    <a
                        onClick={() => setActiveNav("form")}
                        id={activeNav == "form" ? styles.active : undefined}>Form</a>
                </Link>
                <Link href="#menu" >
                    <a
                        onClick={() => setActiveNav("menu")}
                        id={activeNav == "menu" ? styles.active : undefined}>Menu</a>
                </Link>
            </div>

            <div className={styles.extras}>
                <button
                    onClick={() => setShowCart(!showCart)}
                    className={styles.cart}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                    >
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                    {(cart.length > 0) && <div className={styles.badge}>
                        {cart.length}
                    </div>}
                </button>
                <button className={styles.button}>
                    Log In
                </button>
            </div>
            {showCart && <div className={styles.cartViewWrapper} ref={cartRef}>
                <Cart cart={cart} setCart={setCart} />
            </div>}
        </header>
    )
}

export default Navbar;