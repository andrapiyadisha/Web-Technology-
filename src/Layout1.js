import { Outlet, Link } from "react-router-dom";

function Layout1(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3 border border-danger">Logo</div>
                    <div className="col border border-primary">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" to="/Home">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                                </li>
                             </ul>
                            </div>
                        </div>
                    </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 border border-black">Contain</div>
                    <div className="col border border-blue"><Outlet/></div>
                </div>
                <div className="row">
                    <div className="col border border-secondary">footer</div>
                </div>
            </div>
        </>
    );
}
export default Layout1;