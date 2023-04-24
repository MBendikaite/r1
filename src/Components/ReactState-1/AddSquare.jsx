import { useState } from "react";
import Squares from "./Squares";
import randColor from "../../Functions/randColor";



export default function AddSquare() {

    const [square, setSquare] = useState([])


    const addSquare = _ => {
        setSquare(square => [...square, {
            
        }


        ])
    }


    return (
        <>



            <div className="squares">
                {
                    square.map((square, i) => <Squares key={i} data={square} />)
                }

                <div className="squares">

                    <button className="skyblue" onClick={addSquare}>ADD</button>



                </div>
            </div>

        </>
    )
}