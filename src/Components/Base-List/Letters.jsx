export default function Letters ({uppercase, niceColor}){

    const dogs = [
        'šuo', 
        'šunius', 
        'Bobikas',  // kvadratas 
        'kudlius', 
        'Šarikas', // kvadratas
        'avigalvis'
    ]
    function checkCapital(value) {
        if(value!==value.charAt(0).toUpperCase())
        return value[0] !== value[0].toUpperCase()
    }
    const capital = dogs.filter(checkCapital);
    // console.log(capital);

    // const sortLetters = [...dogs].sort((a, b) => b.length - a.length);

    // const allCaps = dogs.map(el => /^[A-z + Š]+$/.test(el));
    // console.log(allCaps);

  
    return(
        
        <span
        
            className="circle2 " style={{
            backgroundColor: niceColor + 70,
            borderColor: niceColor
            
        }}>
        
        
        {capital[uppercase]}</span>
        
    )
}