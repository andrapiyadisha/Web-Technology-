import { useState } from "react";

function Hooks(){
    let count1 = 5;
    const [count2, setCount2] = useState(5);

    return(
        <>
         <h1>{count2}</h1>
         <button onClick={()=>{
            setCount2(count2 + 1);
         }}>Increment</button>
        </>
    );
}
export default Hooks;