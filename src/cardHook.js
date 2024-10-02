import { useState } from "react";

function CardHook(){
    let a=[
        {
            name:"abc",
            age:12,
            img:"link"
        },
        {
            name:"ghj",
            age:17,
            img:"image/the day of the jackal.jpg"
        }
    ]
    
    const [ans, setAns] = useState(0);

   
        return(
            <>
            <div className="card col-3 m-4">
                <img src={a[ans].img} class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">{a[ans].name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p><a href="#" class="btn btn-primary">{a[ans].age}</a></p>
                    <p><button onClick={()=>{
                        setAns((ans + 1)%2);
                        }}>
                            Next
                        </button>
                    </p>
                    <p>
                    <button onClick={()=>{
                        if(ans == 0)
                            setAns(a.length - 1);
                        else{
                            setAns(ans - 1);
                        }
                        }}>
                            Previous
                    </button>
                    </p>
                </div>
                </div>
            </>
        );
}
export default CardHook;