import {Routes,Route} from "react-router-dom";
import {Navbar} from "../components/Navbar";
import {Home}  from "../components/Home";
import { ProductDetails } from "../components/ProductDetails";
import{Cart} from "../components/Cart";

export const RoutesBox = () =>{
    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route path="productdetails/:id" element={<ProductDetails/>}/>
            <Route path="/cartpage" element={<Cart/>}/>
        </Routes>
        </>
    )
}