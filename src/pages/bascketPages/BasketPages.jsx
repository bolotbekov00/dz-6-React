import "./basketPages.css"
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart} from '../../store/cartReducer.js';
import {useState} from "react";

function BasketPages() {
    const [count, setCount] = useState(0)
    const cartItems = useSelector(state => state.pushAdd.cartItems);
    const dispatch = useDispatch();

    const decrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }

    const  handelRemoveFromCart = ( items ) => {
        dispatch(removeFromCart(items.id))
    }

    return (
        <div >
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="basket">
                    {cartItems.map((items) =>
                        <div key={items.id} className="block-product">
                            <img  src={items.thumbnail} alt="aa"/>
                            <h4>{items.name}</h4>
                            <span>{items.description}</span>
                            <h2 className="price"> {items.price}&#36;</h2>
                            <div className="counter">
                                <button onClick={decrement} >-</button>
                                <span>{count}</span>
                                <button onClick={increment} >+</button>
                            </div>
                            <button onClick={() => handelRemoveFromCart(items) } >remove</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default BasketPages;
