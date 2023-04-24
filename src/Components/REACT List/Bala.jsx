
export default function Bala({ id, type, name, color }) {

    return (
    
     <div className="square big"
     
     style={{
        backgroundColor: '#87cfeb70',
       borderColor: '#87cfeb',
       color:color
    }}>

        <h5>{id}</h5>
        <h5>{type}</h5>
        <h5>{name}</h5>
        <h5>{color}</h5>

    
    
       
    
       
 
    </div>
   

)


    // return (
    //     <>
    //         <div className="squares">
    //             {
    //                 seaPlaners.map((e, index) => <div key={index} type={e.type} name={e.name} color={e.color} className="square big" style={{
    //                     backgroundColor: '#87cfeb70',
    //                     borderColor: '#87cfeb',
    //                     color:color
    //                 }}>
                    

    //                 </div>)
    //             }
    //         </div>
    //     </>
    // )

}


