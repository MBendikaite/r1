import './App.scss';
import Bala from './Components/REACT List/Bala';
import ReactList from './Components/REACT List/ReactList';
import Taskfour from './Components/REACT List/Taskfour';



const seaPlaners = [
    { id: 1, type: 'man', name: 'Lina', color: 'blue' },
    { id: 2, type: 'car', name: 'Opel', color: 'red' },
    { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
    { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
    { id: 5, type: 'man', name: 'Tomas', color: 'green' },
    { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
    { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
    { id: 8, type: 'car', name: 'MB', color: 'blue' },
    { id: 9, type: 'car', name: 'ZIL', color: 'red' },
    { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

// const even = seaPlaners.filter(ids => {
//     return ids.id % 2 === 0;
//   });

//   console.log(even)

//   const odd = seaPlaners.filter(ids => {
//     return ids.id % 2 !== 0;
//   });

//   console.log(odd)




//  dogsLetterNumber.map((number, index) => <Taskfive key={index} dogNumber={number} color={number > 6 ? 'green' : 'red'} />)
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>REACT-List</h3>

                <h2>Task 1</h2>
                <div className='squares'>
                

                {
                    seaPlaners.map((e, i) => <Bala key={i} type={e.type} name= {e.name} color={e.color}/>)
                }
              
                </div>

                <h2>Task 2 </h2>



                <h2>Task 3 </h2>

                <ReactList />

                <h2>Task 4 </h2>
                <Taskfour/>

            </header>
        </div>
    );
}

export default App;