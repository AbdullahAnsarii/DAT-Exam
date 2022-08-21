import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import { MenuItem } from "../interfaces/Menu";
import styles from "../styles/Navbar.module.scss";
const Cart: FC<{ cart: MenuItem[], setCart: Dispatch<SetStateAction<MenuItem[]>> }> = ({ cart, setCart }) => {

    const handleRemoveItem = (id: string) => {
        const filteredCart = cart.filter(item => item.id != id)
        localStorage.setItem('cartItems', JSON.stringify(filteredCart));
        setCart([...filteredCart])
    }

    const handleChangeQuantity = (id: string, type: string) => {
        const updatedCart = cart.map(cartItem => {
            const incrementOrDecrement = (type == "add") ?
                Math.min(cartItem.selectedQuantity + 1, cartItem.availableQuantity) :
                Math.max(cartItem.selectedQuantity - 1, 1);

            if (cartItem.id == id) {
                return { ...cartItem, selectedQuantity: incrementOrDecrement };
            }
            return cartItem;
        });
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        setCart([...updatedCart])
    }

    return (
        <div className={styles.cartView}>
            <h2>Cart</h2>
            <div style={{ display: 'block' }}>
                {(cart.length > 0) ?
                    cart.map(cartItem => (
                        <div key={cartItem.id} className={styles.cartItem}>
                            <div >
                                <Image src={cartItem.image} height='70px' width='70px' />
                                <button className={styles.removeButton}
                                    onClick={() => handleRemoveItem(cartItem.id)}>Remove</button>
                            </div>
                            <div>
                                <p>{cartItem.title}</p>
                                <div className={styles.flexRow}>
                                    <button
                                        className={styles.incrementButton}
                                        onClick={() => handleChangeQuantity(cartItem.id, 'subtract')}>-</button>
                                    {cartItem.selectedQuantity}
                                    <button
                                        className={styles.incrementButton}
                                        onClick={() => handleChangeQuantity(cartItem.id, 'add')}>+</button>
                                </div>
                            </div>

                            <p>{cartItem.currency}{cartItem.price}</p>
                        </div>
                    ))
                    : <p>No items are added</p>}
            </div>
            {(cart.length > 0) &&
                <button className={styles.button}>Check Out $
                    {cart.reduce((previousValue, currentValue) => previousValue + currentValue.price * currentValue.selectedQuantity,
                        0)}
                </button>}
        </div>
    )

}

export default Cart;