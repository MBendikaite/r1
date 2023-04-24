import { useState } from "react"

export default function Square(){
    const [count, setCount] = useState(0)

    const plus = _ =>{
        setCount(count => count + 1)
    }
   
    return(
        <>
        <div className="square" style={{
            backgroundColor: 'black',
            width: '300px',
            height: '300px'
        }}>

<button className="yellow" onClick={plus}>+</button>
            {count}

        </div>

            
            </>
    )
}