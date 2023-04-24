export default function Daiktas ({id, type, name, color}){
    return ( <div className="table"
    style={{
        color: 'white',
        border: '1 px solid',
        backgroundColor: color
    }}>
        
        <td>
      <tr> Id: {id} </tr>
      <tr>Type: {type}</tr> 
      <tr> Name: {name} </tr> 
      <tr>Color: {color}</tr> 
        
</td>
</div>

    )

}