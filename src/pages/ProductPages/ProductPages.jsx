import "./ProductPages.css"
import {useDispatch} from "react-redux";
import {addOneItems, addToCart} from "../../store/action.js";
import {addToCartPush} from "../../store/cartReducer.js";
import {useEffect, useState} from "react";
import axios from "axios";


function ProductPages() {
    const [product, setProduct] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        try {
            const data = async () => {
                const response = await axios.get("https://dummyjson.com/products")
                console.log(response.data)
                setProduct(response.data.products)
            }
            data()
        } catch (e) {
            console.log(e)
        }
    }, [])


    const handelAddCart = () => {
        dispatch(addOneItems())
        dispatch(addToCart())
    }


    return (
        <div className="block" >
            {product.map((items) =>
                <div key={items.id} className="block-product">
                    <img  src={items.thumbnail} alt="aa"/>
                    <h4>{items.name}</h4>
                    <span>{items.description}</span>
                    <h2 className="price"> {items.price}&#36;</h2>
                    <button onClick={() => {
                        handelAddCart();
                        dispatch(addToCartPush(items))
                    }}>🛒</button>
                </div>
            )}
        </div>
    );
}

export default ProductPages;