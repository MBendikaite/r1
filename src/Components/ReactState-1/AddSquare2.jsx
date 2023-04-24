import { useState } from "react";
import Squares from "./Squares";
import Square from "./Square";
import Squareblue from "./Squareblue";



export default function AddSquare2() {

    const [square, setSquare] = useState([]);
    const [squareblue, setSquareblue] = useState([]);
    const [squareblue2, setSquareblue2] = useState([])




    const addRed = _ => {
        setSquare(square => [...square, {
           
        }


        ])
    }

    const addBlue = _ => {
        setSquareblue(squareblue => [...squareblue, {
            
        }


        ])
    }

    const addSquare = _ => {
        setSquareblue2(squareblue2 => [...squareblue2, {
            
        }


        ])
    }


    return (
        <>



            <div className="squares">
                {
                    squareblue.map((squareblue, i) => <Squares key={i} data={squareblue} />)
                }
                 {
                    square.map((square, i) => <Square key={i} data={square} />)
                }
                {
                    squareblue2.map((squareblue2, i) => <Squareblue key={i} data={squareblue2} />)
                }

                <div className="squares">

                <button className="skyblue" onClick={addSquare}>ADD</button>
                    <button className="red" onClick={addRed}>ADD RED</button>
                    <button className="blue" onClick={addBlue}>ADD BLUE</button>
                    <button className="red" onClick={_ => setSquare([]) + setSquareblue ([]) + + setSquareblue2 ([])}>REMOVE</button>
                   


                </div>
            </div>

        </>
    )
}