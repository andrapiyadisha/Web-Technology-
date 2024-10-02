import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function FacultyDetail(){
    const [data, setData] = useState({});
    const{ id } = useParams();
    const navigate = useNavigate();
    const apiUrl = 'https://66ed1e94380821644cdb6fd4.mockapi.io/faculties/'+id;
    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return(
            <>
                {/* <Link to="/faculties" className="btn btn-info">Back</Link> */}
    
                <button className="btn btn-danger" onClick={()=>{
                    const apiUrl = 'https://66ed1e94380821644cdb6fd4.mockapi.io/faculties/'+id;
    
                    fetch(apiUrl, {method:"DELETE"})
                    .then(res=>res.json())
                    .then(res=>{
                        navigate('/Faculties');
                    })
    
                    
    
                }}>Delete</button>
                <h1>Name of the faculty is = {data.FacultyName}</h1>
                <img src={data.FacultyImage} />
            </>
    );
    
}

export default FacultyDetail;