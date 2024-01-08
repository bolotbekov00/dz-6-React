import './App.css'
import {Route, Routes} from "react-router-dom";


import Layout from "./component/Layout.jsx";
import Home from "./pages/Home.jsx";
import ProductPages from "./pages/ProductPages.jsx";
import BasketPages from "./pages/BasketPages.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="product" element={<ProductPages/>}/>
                    <Route path="basket" element={<BasketPages/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
