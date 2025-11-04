import React from 'react'

import Carousel1 from './Carousel1';
import Areas from './Areas';


//import { motion, useScroll, useTransform } from "framer-motion";



const Home = () => {
 // const { scrollYProgress } = useScroll(); 
  
  
  //const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
 // const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <>
    <Carousel1/>
   
    
     
      <div>
        <h style={{color:"greenyellow", 
        

        }}
        
        
        > Well come to DD Foundation</h>
        <Areas/>
                
        <div className="card mx-auto" style={{ width: "20rem"  }}>
          
          <div className="card-body">
                    <p>Thank you for your support and belief in the power of positive change. Together, we can build a brighter future for all.</p>

                    <h3 style={{color:"greenyellow"}}>Join Us in Making a Difference!</h3>

            
             <a href="/contact" target="_blank" rel="noopener noreferrer">
            <button type="button">JOINUs AS volunteers</button>
          </a>
        
          </div>
        </div>
            
      </div>
    </>
  )
}


export default Home
