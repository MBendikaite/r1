export default function Uosis ({ uosis}) {
    const trees = [
        'Ąžuolas',
        'Beržas',
        'Uosis'
    ]
        const i = 1
        const uosis1 = [...trees.slice(1, i), ...trees.slice(i+1)]

    return (
        <div className="square small"style={{
            backgroundColor: 'lemonGreen',
            borderColor: '#f5f5f5'
           
            

        }} >

           <span>{uosis=[uosis1]}</span>
           
           
           
         
        </div>
    )
}