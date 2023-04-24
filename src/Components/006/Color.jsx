import Penkta from "./Penkta";
import Penktauzduotis from "./Penktauzduotis";

export default function Color({niceColor, text1, text2}){
    
    return (
    <div className="penktaUzduotis" style={{
        color: niceColor
    }}>
        <Penktauzduotis text1={text1}/>
        <Penkta text2={text2}/>
    </div>
)
}