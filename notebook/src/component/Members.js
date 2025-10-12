import React from 'react'
import gobi from '../Asset/gobind.jpg'
import './Members.css';
import sumi from '../Asset/sumit.jpg'
import rohi from '../Asset/rohi.jpg'
import Ami from '../Asset/Amit1.jpg'
import pre from '../Asset/prem.jpg'
import mohi from '../Asset/mohit6.jpg'
import ud from '../Asset/ud.jpg'
import beta from '../Asset/beta.jpg'
import ap from '../Asset/aria.jpg'







const Members = () => {
  return (
    <div style={{ display:"flex", justifyContent:"centre", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>
        <h2 style={{marginLeft:"",marginTop:"10px"}}>
            welcome to  <h1 style={{color:"greenyellow"}}>DD Foundation</h1>


        </h2>
        <div className="card" style={{ width: "18rem", display:"flex", justifyContent:"centre" }}>
  <img src={gobi} className="card-img-top" alt="..."
  style={{ height:"15em"}}
  />
  <div className="card-body">
    <h5 className="card-title">Founder & tech Head</h5>
    <p className="card-text">Gobind kumar</p>

  </div>
</div>


<h1 className="text-center" >Our Members</h1>
        

  

<div className="card-grid">

  <div className="card" style={{ width: "18rem", margin: "auto" }}>
    <img src={sumi} className="card-img-top" alt="Member 1"/>
    <div className="card-body">
      <h5 className="card-title">Sumit kr Rawani</h5>
      <p className="card-text">...</p>
    </div>
  </div>

  <div className="card" style={{ width: "18rem", margin: "auto" }}>
    <img src={rohi} className="card-img-top" alt="Member 2"/>
    <div className="card-body">
      <h5 className="card-title">Rohit kumar </h5>
      <p className="card-text">...</p>
    </div>
  </div>
  <div className="card" style={{ width: "18rem", margin: "auto" }}>
    <img src={Ami} className="card-img-top" alt="Member 3"/>
    <div className="card-body">
      <h5 className="card-title">Amit kr Mahato</h5>
      <p className="card-text">...</p>
    </div>
  </div>
  
  <div className="card" style={{ width: "18rem", margin: "auto" }}>
    <img src={pre} className="card-img-top" alt="Member 1"/>
    <div className="card-body">
      <h5 className="card-title">Prem kumar</h5>
      <p className="card-text">...</p>
    </div>
  </div>
  <div className="card" style={{ width: "18rem", margin: "auto" }}>
    <img src={mohi} className="card-img-top" alt="Member 1"/>
    <div className="card-body">
      <h5 className="card-title">Mohit kumar</h5>
      <p className="card-text">...</p>
    </div>
  </div>

  <div className="card" style={{ width: "18rem", margin: "auto" }}>
    <img src={ud} className="card-img-top" alt="Member 1"/>
    <div className="card-body">
      <h5 className="card-title">Uday Verma</h5>
      <p className="card-text">...</p>
    </div>
  </div>
  

  

  <div className="card" style={{ width: "18rem", margin: "auto" }}>
    <img src={beta} className="card-img-top" alt="Member 1"/>
    <div className="card-body">
      <h5 className="card-title">Prince kumar</h5>
      <p className="card-text">...</p>
    </div>
  </div>

  <div className="card" style={{ width: "18rem", margin: "auto" }}>
    <img src={ap} className="card-img-top" alt="Member 1"/>
    <div className="card-body">
      <h5 className="card-title">Apsara</h5>
      <p className="card-text">...</p>
    </div>
  </div>



  


</div>

    
  


      
    </div>
  )
}

export default Members
