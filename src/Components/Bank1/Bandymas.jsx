// import { useState } from "react";

export default function Bandymas({addCount}) {
    const clients = [
        { name: 'Saulė ', surname: 'Saulenė', count: 0, id: 1 },
        
      ]

      

      let results = clients.map(item => item.count)

      return(
        <span>{results[addCount]}</span>
      )
    
  }
