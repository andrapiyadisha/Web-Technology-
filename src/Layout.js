function Layout(){
    const a=[
        {
            name:"abc",
            age:12
        },
        {
            name:"ghj",
            age:17
        }
    ]
    const ans=a.map((i)=>{
        return(
            <>
            <div className="card col-3 m-4">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{i.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">{i.age}</a>
                </div>
                </div>
            </>
        );
    });
    return(
        <div className="container">
             <div className="row">
                {ans}
             </div>
        </div>
       
    );
}
export default Layout;