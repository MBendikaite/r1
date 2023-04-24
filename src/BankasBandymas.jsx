
import { useState } from 'react';
import './App.scss';
import Bandymas from './Components/Bank1/Bandymas';
import Client from './Components/Bank1/Client';



const clients = [
  { name: 'Saulė ', surname: 'Saulenė', count: 0.00, id: 1 },
 
  

]




function App() {

  const [client, setClient] = useState(clients)

  return (
    <div className="App">
      <header className="App-header">

      
   
        {
          clients.map(c => <Client key={c.id} data={c} setClients={setClient} />)
        }

      
      

        
      </header>
    </div>
  );
}

export default App;