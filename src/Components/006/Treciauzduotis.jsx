

export default function Treciauzduotis ({zebrasBebras}){
    console.log(zebrasBebras)
   
   if(zebrasBebras === 1)
    return(
       <h1 style={{
        color: 'blue'
       }}>Zebrai ir Bebrai</h1>
    )

    else{

        return(
            <h1 style={{
             color: 'red'
            }}>Zebrai ir Bebrai</h1>
         )

    }
        
  
}

