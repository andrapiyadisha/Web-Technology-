function Map(){
    const student = [
        {
            Name:'Disha',
            Sem: 3
        },
        {
            Name:'Darsh',
            Sem: 3
        },
        {
            Name:'Drashti',
            Sem: 3
        },
        {
            Name:'Vritti',
            Sem: 3
        },
        {
            Name:'Rajvi',
            Sem: 3
        }
    ];
    const stu = student.map((data)=>{
        return(
            <div>
                <table border="1">
                    <tr>
                        <td>{data.Name}</td>
                        <td>{data.Sem}</td>
                    </tr>
                </table>
            </div>
        )
        
    });
    return(
        <div>
            {stu}
        </div>
    )
    
}


export default Map;
