import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Faculties(){
    const[faculties, setFaculties] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://66ed1e94380821644cdb6fd4.mockapi.io/faculties').then((res)=>res.json()).then((res)=>setFaculties(res))
    },[])

    console.log(faculties)

    var result = faculties.map((data)=>{
        return(
            <>
                <div className="col-3">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={data.avatar} className="card-img-top"/>
                        <div class="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">
                                <h5>id:{data.id}</h5>
                            </p>
                            <div className="btn btn-primary">Add</div>
                            <button className="btn btn-danger" onClick={()=>{
                                    const apiUrl = "https://66ed1e94380821644cdb6fd4.mockapi.io/faculties/"+data.id;

                                    fetch(apiUrl, {method:"DELETE"})
                                    .then(res=>res.json())
                                    .then(res=>{
                                        navigate('/Faculties');
                                    })

                                }}>Delete</button>
                        </div>
                    </div>
                </div>
            </>
        )
    });
    return(
        <>
           <div className="container">
                <div className="row">
                    {result} 
                </div>
            </div> 
        </>
    )
}

export default Faculties;