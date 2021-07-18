import { useState } from "react"
import Resinfo from "./input.jsx"
//import db from "./../../db.json"
import {Print} from "./RestInfo"

export default function Home() {
   // var temp = 0;;
    const [rstinfo, setRstinfo] = useState([])
    //  fetch("http://localhost:3004/rest")
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setRstinfo(data)
    //         })
    const  handleInfo = (item) => {
        fetch("http://localhost:3004/rest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        });
    
        printInfo(item)
        
    }
    const printInfo = (item) => {
        fetch("http://localhost:3004/rest")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setRstinfo([...data,item])
            })
    }
    const printInfo1 = () => {
        fetch("http://localhost:3004/rest")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setRstinfo(data)
            })
    }
    const firstStar = () => {
          fetch("http://localhost:3004/rest")
            .then(res => {
                return res.json()
            })
            .then(data => {
                const data1 = data.filter(e => (e.rating >= 1))
                setRstinfo(data1)
            })
         
     }
    const secondStar = () => {
          fetch("http://localhost:3004/rest")
            .then(res => {
                return res.json()
            })
            .then(data => {
                const data1 = data.filter(e => (e.rating >= 2))
                setRstinfo(data1)
            })
     }
    const thirdStar = () => {
           fetch("http://localhost:3004/rest")
            .then(res => {
                return res.json()
            })
            .then(data => {
                 const data1 = data.filter(e => (e.rating >= 3))
                setRstinfo(data1)
            })
    }
    const fourStar = () => {
          fetch("http://localhost:3004/rest")
            .then(res => {
                return res.json()
            })
            .then(data => {
                 const data1 = data.filter(e => (e.rating >= 4))
                setRstinfo(data1)
            })
    }
    const fiveStar = () => {
          fetch("http://localhost:3004/rest")
            .then(res => {
                return res.json()
            })
            .then(data => {
                const data1 = data.filter(e => (e.rating >= 4))
                setRstinfo(data1)
            })
     }
    return <div>
        <Resinfo addInfo={handleInfo} />
         <button onClick={() => {
            firstStar()
        }}>1 Star</button>
        <button onClick={() => {
           secondStar()

        }}>2 Star</button>
        <button onClick={() => {
           thirdStar()
        }}>3 Star</button>
        <button onClick={() => {
           fourStar()
        }}>4 Star</button>
        <button onClick={() => {
           fiveStar()
        }}>5 Star</button>
        <button onClick={() => {
             printInfo1()
        }}>Show All</button>
        <Print restList={rstinfo}/>
    </div>
}