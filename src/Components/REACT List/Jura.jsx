import Valtis from "./Valtis";
import Laivas from "./Laivas";
import Sala from "./Sala";

export default function Jura({ line }) {
    return (
        <>
           
            {
                line.type === 'man' ? <Valtis line={line} /> : null
            }

            {
                line.type === 'car' ? <Laivas line={line}/> : null
            }

            {
                line.type === 'animal' ? <Sala line={line}/> : null
            }
             {
                line.type === 'fish' ? <>
                    <h2>JURA</h2>
                    <div style={{ color: line.color }}>{line.name}</div>
                </> : null
            }


        </>


    )
}