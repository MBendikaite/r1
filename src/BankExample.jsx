
import { useState } from 'react';
import './App.scss';
import Clients from './Components/Formos/Clients';
import Create from './Components/Formos/Create';
import Stat from './Components/Formos/Stat';

const clients = [
  {name: 'Jonas', surname: 'Jonaitis', balance: 1, id: 1}
]

function App() {

  const [cl, setClients] = useState(clients)

  return (
    <div className="App">
      <header className="App-header">

          <Stat cl={cl} />

          {
            cl.map(c => <Clients key={c.id} data={c} setClients={setClients}/>)
          }

          <Create />

      </header>
    </div>
  );
}

export default App;