import { useState } from "react";


export default function Customers (){
    
const clientsList = [
    { id: 1, accountBalance: 0, name: 'Jonas', surname: 'Jonauskas' },
    { id: 2, accountBalance: 0, name: 'Melisa', surname: 'Melisienė' },
    { id: 3, accountBalance: 0, name: 'Olivija', surname: 'Olivienė' },
    { id: 4, accountBalance: 0, name: 'Ana', surname: 'Anienė' }
];

const [client, setClient] = useState(clientsList);
const [count, setCount] = useState(0);
const [update, setUpdate] = useState(count);


const handleChange = (event) => {
    setCount(event.target.value);
  };

     function handleClick () {
   setUpdate(count)
  };





function removeCustomer1(id){
    const newClient = client.filter((user) => user.id !== id)
    setClient(newClient)
}
    return(


            <table className="styled-table">
                

                    <thead>
                        <tr>
                            <th>Vardas</th>
                            <th>Pavardė</th>
                            <th>Sąskaitos likutis</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    
                   
                    {
                        client.map((user) =>
                        
                        <tbody>
                               
                                <tr className='active-row'
                                key={user.id} value={user.id}> 
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    {update} 
                                 <td><input type="number" name='name' value={count} onChange={handleChange}></input></td>
                                  <button id='button' className="blue" onClick={handleClick}>Pridėti lėšų</button>
                                  
                                  <td><button className='red' onClick={() => removeCustomer1(user.id)}>Ištrinti</button></td> 
                                  
                                </tr>
                                </tbody>
                            )
                            
                    }
                    
                </table>

               

       

    )
}