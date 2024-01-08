import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartReducer.js';

function BasketPages() {
    const cartItems = useSelector(state => state.pushAdd.cartItems);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    console.log(cartItems)

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item._id}>
                            <img src={item.picture} alt="aa"/>
                            <p>{item.name}</p>
                            <p>{item._id}</p>
                            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default BasketPages;
