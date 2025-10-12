const mongoose = require('mongoose')

//const URI = "mongodb+srv://govindrawani929:govindrawani@cluster0.pxm16ft.mongodb.net/ddFoundation?retryWrites=true&w=majority&appName=Cluster0"
const URI ="mongodb+srv://govindrawani929:govindrawani@cluster0.pxm16ft.mongodb.net/ddfoundation?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo =async()=>{
   try {
           await mongoose.connect(URI);
           console.log("connected to db");
   
           
       } catch (error) {
           console.error("failed to connect")   ;
           process.exit(0);     
       }
}

module.exports = connectToMongo;