import "./home.css"
export function Print({ restList }) {
    return <div className="list">
        {restList.map(e => <div key={e.id} style={{height:170,backgroundColor:"lightPink",display:"flex"}}>
            <img style={{height:100}} src={e.url} alt="Good" />
            <div style={{marginTop:20,marginLeft:20}}>
            <p>ResturantName: <span style={{color:"blue"}}>{e.name}</span></p>
            <p>Rating: <span style={{color:"white"}}>{e.rating }</span></p>
            <p>Dish: <span style={{color:"black"}}>{e.dish}</span></p>
            <p>Price: <span style={{color:"red"}}>{e.price}</span></p>
                <p>Payment Mode: <span style={{color:"red"}}>{e.payMode}</span></p>
                </div>
        </div>)}
    </div>
}