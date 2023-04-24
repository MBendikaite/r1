
import './App.scss';
import Antrauzduotis from './Components/006/Antrauzduotis';
import Hello from './Components/006/Hello';
import Treciauzduotis from './Components/006/Treciauzduotis';
import Ketvirtauzduotis from './Components/006/Ketvirtauzduotis';
import Color from './Components/006/Color';
import rand from './Functions/rand';



// import rand from './Functions/rand';


// const random = rand(1, 2)
// const blue = '#0000FF'
const red = "#ff0000"


// const data = [
//   {
//     color: blue,
//     color: red

//   }
// ]

const data2 = [
  {
    color: red
    
  }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='hello'>
          <Hello />
        </div>
        <Antrauzduotis niceText="#61dafb" />

        {/* <div className='ZebrasBebras'>
          {

            data.map((d, index) => <Treciauzduotis key={index} zebrasBebras={d.color} />)

          }
        </div> */}

        <Treciauzduotis zebrasBebras={rand(1,2)} />


        {/* <div className='ZebrasBebras'>
      {

        data.map((d, index) => d.color < 1 ? d.color : <Treciauzduotis key={index} zebrasBebras = {d.color} /> )

      }

      </div> */}

        {/* <Treciauzduotis zebrasBebras = "#0000FF"/>
         <Treciauzduotis zebrasBebras = "#ff0000"/> */}

         <div className="ketvirtaUzduotis">
          {
             data2.map((c, index) => <Ketvirtauzduotis key={index} h1={c.color} h2={c.color} />)
          }

         </div>

        
         <div className='penktaUzduotis'>
         <Color niceColor = "#61dafb"/>
         </div>

       
        

      </header>
    </div>
  );
}

export default App;
