import React, {useState} from 'react'

const Contador = () => {
    // logica de JS
    const[numero,setNumero] = useState(0);
    const aumentar = ()=>{
         setNumero(numero + 1)
    }

    return (
        <div>
            <h3>Mi primer componente {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}

export default Contador
