import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import CreateCustomer from './Components/BankAplication/CreateCustomer';
import CustomersList from './Components/BankAplication/CustomersList';

import { crudCreate, crudRead } from './Utils/localStorage';

const key = 'ClientsDb'


function App() {

  const [data, setData] = useState(null)
  const [createData, setCreateData] = useState(null)


  useEffect(() => {
    setData(crudRead(key))

  }, [])

  useEffect(()=>{
    if(null === createData){
      return;
    }

    crudCreate(key, createData)
    setData(crudRead(key));

  }, [createData])

 

  return (
    <>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Klientai</span>
  </div>
</nav>
    <div className="container">
    <div className="row">
      <div className="col -4">
        <CreateCustomer setCreateData={setCreateData}/>
      </div>
      <div className="col-8">
      <div className="row">
        
        <CustomersList 
            data={data} 
            setData={setData} 
            setCreateData={setCreateData} 
            storageId={key} 
        />
       
        
      </div>
    </div>
    </div>
  </div>
  </>
  );
}

export default App;
