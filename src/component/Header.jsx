import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

function Header() {

    const itemsCount = useSelector((state) => state.cart.itemCount)

    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/product">Product</NavLink>
            </li>
            <li>
                <NavLink to="/basket">Basket</NavLink>
            </li>
            <li>
                <span>{itemsCount}</span>
            </li>
        </ul>
    );
}

export default Header;