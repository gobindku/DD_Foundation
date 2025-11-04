import React from 'react'
import './Areas.css'; // Assuming you have a CSS file for styling
import edu from '../Asset/eductaoin.jpg'
import won from '../Asset/womens.webp'
import evs from '../Asset/evs.jpg'
import tri from '../Asset/tribals.jpg'







const Areas = () => {
    
  return (
    <div>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>Our Areas of Work</h2>
        <h1 style={{textAlign:"center",marginTop:"10px"}}></h1>
        <p style={{ textAlign: "center", margin: "20px", color: "orange" }}>
            We are dedicated to making a positive impact in various areas. Here are some of the key</p>
            
    <div className="card-grid">
        
<div className="card mx-auto" style={{ width: "20rem"  }}>
  <img src={edu} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">EDUCATION</h5>
    <p className="card-text">we believes in the power of education to transform lives. Our initiatives ensure access to quality learning opportunities for all, bridging educational disparities and empowering individuals to unlock their potential and contribute meaningfully to society. </p>

  </div>
</div>
    
<div className="card mx-auto" style={{ width: "20rem"  } }>
  <img src={won} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">WOMENS INPROVEMENTS</h5>
    <p className="card-text">Empowering women is central to our mission. Through education, economic empowerment, and advocacy for women’s rights, we create opportunities for women and girls to thrive, free from discrimination and violence, building stronger, more resilient communities for everyone.</p>
    
  </div>
</div>
<div className="card mx-auto" style={{ width: "20rem"  }}>
  <img src={edu} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">SPORTS AND PHYSICAL ACTIVITES</h5>
    <p className="card-text">Miss </p>

  </div>
</div>
    
</div>

<div className="card-grid">
        
<div className="card mx-auto" style={{ width: "20rem"  }}>
  <img src={evs} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">SAVE OUR ENVIROMENT</h5>
    <p className="card-text">Preserving our planet is a priority at DD Foundation. Through tree planting drives, waste management programs, and advocacy for renewable energy, we promote sustainable practices that protect ecosystems and create a healthier, more sustainable world for future generations </p>

  </div>
</div>
    
<div className="card mx-auto" style={{ width: "20rem"  } }>
  <img src={tri} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">SAVE OUR CALTURE</h5>
    <p className="card-text">We are dedicated to uplifting tribal communities and improving their livelihoods. Through our tribal development initiatives, we aim to empower indigenous peoples by providing access to education, healthcare, and economic opportunities. We collaborate with tribal leaders and local organizations to preserve their cultural heritage while fostering sustainable development.</p>
    
  </div>
</div>
</div>



    
      
    </div>
  )
}

export default Areas
