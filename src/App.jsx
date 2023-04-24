// import { useState } from 'react';
import { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Customers from './Components/BankAccount/Customers';

const clientsList = [
    { id: 1, accountBalance: 0, name: 'Jonas', surname: 'Jonauskas' },
    { id: 2, accountBalance: 0, name: 'Melisa', surname: 'Melisienė' },
    { id: 3, accountBalance: 0, name: 'Olivija', surname: 'Olivienė' },
    { id: 4, accountBalance: 0, name: 'Ana', surname: 'Anienė' }
];


      


function App() {

   const [filterClients, setFilteredClients] = useState(clientsList)



    return (
        <div className="App">
            <header className="App-header">
            <table className='styled-table'>
                <thead>
        {filterClients.map(client => {
          const {id, accountBalance, name, surname } = client
          return (
            <tr className='active-row' key={id}>
              <th>Vardas: {name} </th>
              <th>Pavardė {surname}</th>
              <th>Sąskaitos likutis: {accountBalance}</th>
            </tr>
          )
          
        })}
         
        </thead>
      </table>
     <Customers/>
            </header>

         
        </div>
    );
}

export default App;
