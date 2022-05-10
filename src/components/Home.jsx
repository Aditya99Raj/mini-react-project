import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "./Card";


export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();

    }, [])

    const getData = () => {
        axios.get("http://localhost:8080/foodlist").then((response) => {
            setData(response.data)
        })
    }
    // const sorting = ()=>{

    //     const state = [...data];
    //     state.sort((b,a) =>
    //       +a.price - +b.price
    //     );
    //     setData(state);
    //     console.log(state);
    // }

    const handleChange = (e) => {
        //console.log(e.target.value)
        if (e.target.value == "high") {
            const new_data = [...data]
            new_data.sort((a, b) => +b.price - +a.price)
            // console.log(decData)

            setData(new_data)
            // console.log(data,"dec")
        }
        else if (e.target.value == "low") {
            const incData = [...data]
            incData.sort((a, b) => +a.price - +b.price)
            setData(incData)
            // console.log(incData)
            //   console.log("data",data)
        }

    }
    const filterData = (e) => {
        const filterdata = [...data];
        if (e.target.value == "best") {

            let new_data = filterdata.filter(el => el.rating >= 5)
            // console.log(new_data)
            setData(new_data)
        }
        else if (e.target.value == "good") {
            let low_rating = filterdata.filter(el => el.rating < 5)
            // console.log(low_rating)
            setData(low_rating)
        }

    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                <select onChange={filterData} >
                    <option>Filer by ratings</option>
                    <option value="best">Above 5</option>
                    <option value="good">Below 5</option>
                </select>
                {/* <button onClick={sorting}>sort</button> */}
                <select onChange={handleChange} >
                    <option value="sort">Sort by Price</option>
                    <option value="high">high to low</option>
                    <option value="low">low to high</option>
                </select>
            </div>

            <div style={{ display: "grid", gap: 30, gridTemplateColumns: "repeat(4,1fr)" }}>

                {data.map((el, i) => (

                    <Card name={el.name} image={el.image} price={el.price} rating={el.rating} data={data} id={el._id} />
                )
                )}
            </div>
        </div>
    )
}