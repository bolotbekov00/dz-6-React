import product from "../data/product.json"
import {useDispatch} from "react-redux";
import {addOneItems, addToCart} from "../store/action.js";
import {addToCartPush} from "../store/cartReducer.js";


function ProductPages() {
    const dispatch = useDispatch()

    const handelAddCart = () => {
        dispatch(addOneItems())
        dispatch(addToCart())
        dispatch(addToCartPush(product))
    }


    return (
        <div>
            {product.map((items) =>
                <div key={items._id} className="block-product" >
                    <img src={items.picture} alt="aa"/>
                    <h4>{items.name}</h4>
                    <span>{items.description}</span>
                    <button onClick={ () => {
                        handelAddCart();
                        dispatch(addToCartPush(items))
                    }} >{items.price}</button>
                </div>
            )}
        </div>
    );
}

export default ProductPages;