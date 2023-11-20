import { useState } from "react";

export default function OtherCounter({ counter }){
    const [secretcounter, setCount] = useState(0)
    
    function increase(){
        setCount(secretcounter + counter)
    }

    return (
        <div>
            <button onClick={increase}>Calculate</button>
            <p>This is my secret calculation: {secretcounter+1}</p>
        </div>
    )
}