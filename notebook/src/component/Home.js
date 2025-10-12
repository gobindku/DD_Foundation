import React from 'react'

import Carousel1 from './Carousel1';


//import { motion, useScroll, useTransform } from "framer-motion";



const Home = () => {
 // const { scrollYProgress } = useScroll(); 
  
  
  //const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
 // const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <>
    <Carousel1/>
   
    
     
      <div>
        <h2 style={{color:"greenyellow", 
        

        }}
        
        
        > Well come to DD Foundation</h2>
        
        <p style={{color:"white", fontSize:"20px", margin:"20px"}}>DD Foundation is a non-profit organization dedicated to making a positive impact in the lives of individuals and communities in need. Our mission is to provide support, resources, and opportunities to those facing challenges, empowering them to build a better future.</p>
        <p style={{color:"white", fontSize:"20px", margin:"20px"}}>At DD Foundation, we believe in the power of compassion and collective action. We work tirelessly to address various social issues, including poverty, education, healthcare, and environmental sustainability. Through our programs and initiatives, we strive to create lasting change and promote equality and justice for all.</p>
        <p style={{color:"white", fontSize:"20px", margin:"20px"}}>Our dedicated team of volunteers and staff members are passionate about making a difference. We collaborate with local communities, government agencies, and other organizations to implement effective solutions that address the root causes of social challenges.</p>
        <p style={{color:"white", fontSize:"20px", margin:"20px"}}>We invite you to join us in our mission to create a better world. Whether through volunteering your time, making a donation, or spreading awareness about our cause, every contribution counts. Together, we can make a meaningful impact and bring hope to those who need it most.</p>
        <p style={{color:"white", fontSize:"20px", margin:"20px"}}>Thank you for your support and belief in the power of positive change. Together, we can build a brighter future for all.</p>
        <h3 style={{color:"greenyellow"}}>Join Us in Making a Difference!</h3>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            <button type="button">JOINUs</button>
          </a>
        </div>
      </div>
    </>
  )
}


export default Home
