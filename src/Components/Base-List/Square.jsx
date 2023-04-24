import Dogs from "./Dogs";
import Letters from "./Letters";

export default function Square({niceColor, breed, uppercase, breeds}){
    return (
        <div className="square " style={{
            backgroundColor: niceColor + 70,
            borderColor: niceColor
            
        }}>
           <Dogs breed={breed}/>
           {breeds}
           <Letters uppercase={uppercase}/>
        </div>
    );
}