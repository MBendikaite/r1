import './App.scss';
import AddSquare from './Components/ReactState-1/AddSquare';
import AddSquare2 from './Components/ReactState-1/AddSquare2';
import ReactState2 from './Components/ReactState-1/ReactState2';




function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>REACT STATE</h2>
                <h3>Task 1, 2 ,3 </h3>
               
                <div className='squares'>
                <ReactState2/>
                </div>

                <h3>Task 4 </h3>

                {/* <div className='squares'>
                   
                  <AddSquare/>
                   </div> */}

                   <h3>Task 4 </h3>
                   <div className='squares'>
                   
                   <AddSquare2/>
                    </div>

                
            </header>
        </div>
    );
}

export default App;