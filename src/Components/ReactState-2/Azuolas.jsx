export default function Azuolas ({azuolas, berzas, uosis}) {
    const trees = [
        'Ąžuolas',
        'Beržas',
        'Uosis'
    ]
        const i = 1
    const azuolas1 = [...trees.slice(0, i), ...trees.slice(i+2)]

    return (
        <div className="square small"style={{
            backgroundColor: 'lemonGreen',
            borderColor: '#f5f5f5'
            

        }} >

           <span>{azuolas=[azuolas1]}</span>
           
           
           
         
        </div>
    )
}