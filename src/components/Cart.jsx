import { CartContext } from "./CartContext";
import { useContext } from "react";

export const Cart = () =>{
    const { item } = useContext(CartContext);
    console.log("item",item)
    return (
        <div>

        </div>
    )
}