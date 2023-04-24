import Akvariumas from "./Akvariumas";
import Garazas from "./Garazas";
import Namas from "./Namas";
import Narvas from "./Narvas";

export default function Pasaulis({ line }) {
    return (
        <>
           
            {
                line.type === 'man' ? <Namas line={line} /> : null
            }

            {
                line.type === 'car' ? <Garazas line={line}/> : null
            }

            {
                line.type === 'animal' ? <Narvas line={line}/> : null
            }

            {
                line.type === 'fish' ? <Akvariumas line={line}/> : null
            }



        </>


    )
}