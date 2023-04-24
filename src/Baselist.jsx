import './App.scss';
import Circle from './Components/Base-List/Circle';
import Letters from './Components/Base-List/Letters';
import Square from './Components/Base-List/Square';
import Taskfive from './Components/Base-List/Taskfive';


// const data = [
//     { color: "#00FF00", breed: 0 },
//     { color: "#00FF00", breed: 1 },
//     { color: "#00FF00", breed: 2 },
//     { color: "#00FF00", breed: 3 },
//     { color: "#00FF00", breed: 4 },
//     { color: "#00FF00", breed: 5 },


// ]

// const data2 = [
//     { color: "#00FF00", breed: 0 },
//     { color: "#00FF00", breed: 1 },
//     { color: "#00FF00", breed: 2 },
//     { color: "#00FF00", breed: 3 },
//     { color: "#00FF00", breed: 4 },
//     { color: "#00FF00", breed: 5 },
// ]





// const sortLetters = [...data2].sort((a, b) => a.length - b.length);
// console.log(sortLetters)



const data3 = [
    { color: "#00FF00",  uppercase: 0 },
    { color: "#00FF00",  uppercase: 1 },
    { color: "#00FF00",   uppercase: 2 },
    { color: "#00FF00",  uppercase: 3 },
    { color: "#00FF00",  uppercase: 4 },
    { color: "#00FF00",  uppercase: 5 },
]



const dogs = [
    'šuo', //3
    'šunius',  //6
    'Bobikas',  // 7
    'kudlius', //7
    'Šarikas', // 7
    'avigalvis' //9
]

// const odd = dogs.filter((element, index)=>
//     index % 2 ==0
// )

// console.log(odd)



const dogsLetterNumber = dogs.map(dogName => dogName.length);
let total = dogs.length
console.log(total)

// const dogsToNumbers = 
  

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Base-List</h3>
                <h2>Task 1</h2>

                <div className="squares">
                    {/* <Square niceColor="#008000" breed={1} />
                    <Square niceColor="#00FF00" breed={2} />
                    <Square niceColor="#00FF00" breed={3} />
                    <Square niceColor="#00FF00" breed={4} />
                    <Square niceColor="#00FF00" breed={5} />
                    <Square niceColor="#00FF00" breed={6} /> */}

                    {
                        dogs.map((dogBreed, index) => <Square key={index} breeds={dogBreed} />)
                    }

                </div>

                <h2>Task 2</h2>

                <div className="circles">
                <div className="squares">
                    {
                        dogs
                        .map((dogBreed, index) => (
                            index % 2 === 0 ?
                            
                            <Circle key={index} dogToNumber={index + 1 }  breeds={dogBreed} />
                            :
                             <Square key={index} breeds={dogBreed} />
                           
                        ))}
                        
                        {/* // data2.map((c, index) => <Circle key={index} niceColor={c.color} breed={c.breed}
                        //  />) */}
                            
                    
                            </div>   
                </div>
                
               
               

                <h2>Task 3</h2>

                <div className="circles">
                    {
                        dogs
                        
                        .map((dogBreed, index) => (
                            <Circle key={index} dogToNumber={index + 1 }  breeds={dogBreed} />
                        
                        ))}
                        
                        {/* // data2.map((c, index) => <Circle key={index} niceColor={c.color} breed={c.breed}
                        //  />) */}
                            
                    
                    
                </div>
                

              <h2>Task 4</h2>
              <div className="circles2">
                    {
                        data3.map((c, index) => <Letters key={index} niceColor={c.color}  uppercase={c.uppercase} />)
                    }

                </div>
                
                <h2>Task 5</h2>
                <div className="circles3">
                    {
                        dogsLetterNumber.map((number, index) => <Taskfive key={index} dogNumber={number} color={number > 6 ? 'green' : 'red'} />)
                    }

                </div>

                
            </header>
        </div>
    );
}

export default App;
