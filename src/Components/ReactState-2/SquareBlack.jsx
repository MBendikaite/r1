import { useState } from "react"
import Square from "./Square"

export default function SquareBlack(){
    
    const [square, setSquare] = useState([])
    

    const addSquare = _ =>{
        setSquare(s => [...s, {

        }])
    }

    return(
        <>

            <div className="squares " style={{
              
               

            }}>
                
                    
                    {
                         square.map((square, i) => <Square key={i} />)
                    }
                    

                
            </div>


            <button className="pink" onClick={addSquare}>Pridėti</button>
            
                
        
        </>

    )

}

