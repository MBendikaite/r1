import { useState } from 'react';
import './App.scss';
import SquareBig from './Components/ReactState-2/SquareBig';
import SquareBlack from './Components/ReactState-2/SquareBlack';


function App() {

    const [count, setCount] = useState(0)
   


    const plus = _ =>{
        setCount(count => count + 1)
    }
   
    return (
        <div className="App">
            <header className="App-header">
                <h3>REACT-State 2</h3>


                <h2>Task 1</h2>
                <div className='squares'>
                    <SquareBig />
                    
                </div>

                <h2>Task 2</h2>


                <SquareBlack />

                <h2>Task 3</h2>
                {/* 
             Sukurti aplikaciją su vienu mygtuku “+” ir pradiniu skaičiumi 0. 
             Paspaudus mygtuką skaičius didėtų vienetu. Panaudoti localStorage ir padaryti taip, 
             kad skaičiavimai kiekvieną kartą perkrovus puslapį prasidėtų ne nuo 0, o nuo prieš tai buvusio skaičiaus. */}

<div className='squares'>
    

<>
        <div className="square" style={{
           
        }}>
            
           

<button className="yellow" onClick={plus}>+</button>
           <h1>{count}</h1> 

        </div>

            
            </>
             
</div>

            </header>
        </div>
    );
}

export default App;