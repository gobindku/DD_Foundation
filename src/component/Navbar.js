import React from 'react'
import { Link } from 'react-router-dom';

const Navbar =()=>{
    return(
        <div>
            
       <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: "100%" }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"
     style={{color:"pink"}}> DD Foundation</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav" style={{ color:""}} >
        <Link className="nav-link active" aria-current="page" to="/" style={{color:"black"}}>Home</Link>
        <Link className="nav-link" to="/gellary">Gellary</Link>
        <Link className="nav-link" to="/work">work</Link>
        <Link className="nav-link" to="/donate">DonateUs</Link>
        <Link className="nav-link" to="/about">AboutUs</Link>
        <Link className="nav-link" to="/members" >Members</Link>
        
        
        
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;