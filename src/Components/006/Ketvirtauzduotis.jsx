import Ketvirta from "./Ketvirta";

export default function Ketvirtauzduotis ({h1, h2}) {
    return(
        <div className="ketvirtaUzduotis">
            <h1 style={{
                color: h1,
                color: h2
            }}>Some text</h1>

            <Ketvirta h2={h2}/>
        </div>
    )
   
}