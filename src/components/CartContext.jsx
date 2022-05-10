import {createContext, useState} from "react";
 export const CartContext = createContext();

 export const CartContextProvider = (props)=>{
     const [item,setItem] = useState([ 

     ])
     const updateCart = ({name,price})=>{
         //console.log("hello")
         setItem({name,price})

     }
     return (
         <CartContext.Provider value={{updateCart,item}}>
             {props.children}
         </CartContext.Provider>
     )
 }