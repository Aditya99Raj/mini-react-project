import { CartContext } from "./CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export const Card = ({ name, image, price, rating, id }) => {
    const { updateCart } = useContext(CartContext)
    //console.log(updateCart,"cart")
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.stopPropagation();
        updateCart({name,price});
        navigate("/cartpage")
    }

    const cartRoute=()=>{
        navigate(`/productdetails/${id}`)
    }
    
    return (
        // <Link to={`/productdetails/${id}`} key={"x"}>
            <div onClick={cartRoute}>
                <div>
                    <img src={image} alt={name} width="350px" height="350px" />
                </div>
                <h1>name:{name}</h1>
                <h1>price:{price}</h1>
                <h1>rating:{rating}</h1>
                <button onClick={handleClick} >Add To Cart</button>
            </div>
        // </Link>
    )
}