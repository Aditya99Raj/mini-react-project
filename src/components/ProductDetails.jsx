import axios from "axios";
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react"
import{Card} from "./Card"
export const ProductDetails = () =>{
    const [productdetail,setProductdetail] = useState([])
    const {id} = useParams()
   // console.log("id",id)
  
    useEffect(() => {
        getData(id);

    },[])

    const getData = async (id) => {
        const res = await   axios.get("http://localhost:8080/foodlist");
        
        const new_data= res.data
       // console
        let filterdata = new_data.filter(el=>el._id==id);
      // console.log(filterdata)
      setProductdetail(filterdata)
    }
  // console.log(productdetail)
    return (

        <div>
           {productdetail.map((el)=>
            <Card name={el.name} image={el.image} price={el.price} rating={el.rating}/>
           )}
        </div>
    )
}
// <Card name={el.name} image={el.image} price={el.price} rating={el.rating}/>