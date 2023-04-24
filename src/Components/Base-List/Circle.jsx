import Dogs from "./Dogs";
import Letters from "./Letters";
import Taskfive from "./Taskfive";

export default function Circle ({niceColor, breed, uppercase, dogNumber, dogToNumber, breeds, color}){
    return (
        <div className="circle " style={{
            // backgroundColor: niceColor + 70,
            // borderColor: niceColor
            backgroundColor: '#00FF00' +70
            
            
        }}>
        <Letters uppercase={uppercase}/>
        <Dogs breed={breed}/>
        {dogToNumber}
        {breeds}
    {color}
        <Taskfive dogNumber={dogNumber}/>
          
        </div>
    );
}