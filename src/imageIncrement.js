import { useState } from "react";

function ImageIncrement(){
    let count1 = 5;
    const [increment, setIncrement] = useState(100);

    return(
        <>
         
         <button onClick={()=>{
            setIncrement(increment + 10);
         }}>Increment</button>
         <button onClick={()=>{
            setIncrement(increment - 10);
         }}>Decrement</button>
         <br/>
         <br/>
         <img src="https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj" width={increment}></img>
        </>
    );
}
export default ImageIncrement;