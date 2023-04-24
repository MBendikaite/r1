import { useState } from "react"
import Azuolas from "./Azuolas"
import Berzas from "./Berzas"
import Uosis from "./Uosis"

export default function SquareBig() {
  
    
    const [square1, setSquare1] = useState([])
    const [square2, setSquare2] = useState([])
    const [square3, setSquare3] = useState([])

    const azuolas = _ => {
        setSquare1(square => [...square, {

        }])
    }


    const berzas = _ => {
        setSquare2(square => [...square, {

        }])
    }

    const uosis = _ => {
        setSquare3(square => [...square, {

        }])
    }


    return (

       

            <div className="squares">
            <div className="square big" style={{
            backgroundColor: 'green',
            borderColor: 'green',
            width: '600px',
            height: '600px'
           


        }} >
                {
                    square1.map((square1, i) => <Azuolas key={i} />)
                }
                {
                    square2.map((square2, i) => <Berzas key={i} />)

                }

                {
                    square3.map((square3, i) => <Uosis key={i} />)
                }


            </div>




            <div className="squares">
                <button className="green" onClick={azuolas}>Ąžuolas</button>
                <button className="green" onClick={berzas}>“Beržas”</button>
                <button className="green" onClick={uosis}>“Uosis”</button>
                <button className="red" onClick={_ => setSquare1([]) + setSquare2 ([]) +  setSquare3 ([])}>Pašalinti</button>
            </div>



        </div>

    )
}