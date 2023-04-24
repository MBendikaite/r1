import { useState } from "react";
import rand from "../../Functions/rand";



export default function ReactState2() {

    const [shape, setShape] = useState(null);
    const [count, setCount] = useState(rand(5, 25));
    // const [square, setSquare] = useState([])

    const set0 = _ => {
        setCount(0)
    }

    const plus1 = _ => {
        setCount(count => count + 1)
    }

    const minus3 = _ => {
        setCount(count => count - 1)
        setCount(count => count - 1)
        setCount(count => count - 1)
    }

    const doShape = _ => {
        setShape(shape => shape ? null : '50%')
    }

    const random = _ => {
        setCount(rand(5, 25))
    }

    // const addSquare = _ => {
    //     setSquare(square => [...square, 'x'
            
    //     ])
    // }
   
    



    return (
        <>

            <div className="squares">
                <div className="square" style={{
                    borderRadius: shape
                }}>
                    {count}
                    

                </div>
            </div>

            <div className="squares">
               

                <button className="blue" onClick={doShape}>Change</button>
                <button className="green" onClick={random}>Random</button>
                <button className="pink" onClick={set0}>0</button>
                <button className="yellow" onClick={plus1}>Plus +1 </button>
                <button className="red" onClick={minus3}>Minus - 3 </button>
                {/* <button className="skyblue" onClick={addSquare}>ADD</button> */}



            </div>

        </>
    )
}

