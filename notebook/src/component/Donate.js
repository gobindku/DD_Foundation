import React from 'react';
import qrImg from '../Asset/Qr.jpg'; 

const Donate = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Support Our Cause</h1>
      <p style={{ textAlign: "center", margin: "20px",color:"orange" }}>
        दानं भोगो नाशस्तिस्रो गतयो भवन्ति वित्तस्य।
यो न ददाति न भुङ्क्ते तस्य तृतीया गतिर्भवति॥</p>
      <div style={{ textAlign: "center", margin: "20px" }}>
        
          <img src={qrImg} alt="Donate QR" style={{ width: '120px', marginBottom: '10px' }} />
          <div>Donate Now</div>
        
      </div>
      <p style={{ textAlign: "center", margin: "20px" }}>
        Thank you for your support! Every contribution makes a difference.</p>
        </div>
  )
}

export default Donate
