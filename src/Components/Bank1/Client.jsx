import { useState } from "react"


export default function Client({data}) {

    const clients = [
        { name: 'Saulė ', surname: 'Saulenė', count: 0.00, id: 1 } ]
      
    const [client, setClient] = useState(clients)
    const [count, setCount] = useState('');
    const [update, setUpdate] = useState(count);
    

    const handleChange = (event) => {
        setCount(event.target.value);
      };

      const handleClick = () => {
        setUpdate(count);
      };

      const clear = () => {
        setUpdate("")
      }

 

    return (

    
        <>
           
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Vardas</th>
                        <th>Pavardė</th>
                        <th>Sąskaitos likutis</th>
                        <th></th>

                    </tr>


                </thead>
                <tbody>
                    <tr className="active-row">

                        <td>{data.name}</td>
                        <td>{data.surname}</td>
                         <td>{update}</td>
                        
                    </tr>


                </tbody>



            </table>
            
                





                <input type="number" id='count' name="count" placeholder="Įveskite sumą" onChange={handleChange}  value={count}/>

                <div className="square">
       <button className="blue" onClick={handleClick}>Pridėti lėšų</button>
       <button className="red" onClick={clear} >Nuskaičiuoti lėšas</button>
       {/* <button className="red" onClick={clearAll} >Ištrinti</button> */}
       </div>



            {/* <input type="number" min="1" max="200000" placeholder="Įveskite norimą sumą" value={state.topic.count} onChange={onHandleChange} /> */}
            {/* <button className="blue" onClick={handleChange}>Pridėti lėšų</button> 
                    <button className="blue" onClick={handleChange}>Nuskaičiuoti lėšas</button>  */}

       {/* <input type="number" min="1" max="200000" name='count' placeholder="Įveskite sumą" onChange={onHandleChange} value={state.topic.count} /> */}
    
  

        </>
    )
}

    // const [state, setState] = useState({
    //     toggle: false,
    //     topic: {
    //       count: false
       
    //     }
    //   });
    
    //   const onHandleChange = (e) => {
    //     const { name, value } = e.target;
    //     setState(pre => ({
    //       ...pre,
    //       topic: {
    //         ...pre.topic,
    //         [name]: value
    //       }
    //     }))
    //   }
    //   let results = clients.map(item => item.count)
    //   console.log(results)
