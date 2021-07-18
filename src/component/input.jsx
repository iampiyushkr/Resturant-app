import { useState } from "react"
import { v4 as uuid } from "uuid"
import "./home.css"

export default function Resinfo({addInfo}) {
    const [name, setName] = useState("")
    const [dish, setDish] = useState("")
    const [price, setPrice] = useState("")
    const [payMode, setPayMode] = useState("")
    const [imgurl, setImgurl] = useState("")
    const [rating, setRating] = useState("")
    
    
    return <div className="inpDiv">
        <input value={name} type="text" placeholder="resturent name" onChange={(e) => setName(e.target.value)}></input>
        <input value={dish} type="text" placeholder="Dish" onChange={(e) => setDish(e.target.value)}></input>
        <input value={price} type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)}></input>
        <input value={payMode} type="text" placeholder="PaymentMode" onChange={(e) => setPayMode(e.target.value)}></input>
        <input value={imgurl} type="text" placeholder="ImgUrl" onChange={(e) => setImgurl(e.target.value)}></input>
         <input value={rating} type="text" placeholder="Rating" onChange={(e) => setRating(e.target.value)}></input>

        <button onClick={() => {
            
            const payload = {
                name: name,
                dish: dish,
                price: price,
                payMode: payMode,
                url: imgurl,
                id: uuid(),
                rating:rating,
            }
            addInfo(payload)
            setName("")
            setDish("")
            setPrice("")
            setPayMode("")
            setImgurl("")
            setRating("")
        }}>Add Resturent</button>
    </div>
}