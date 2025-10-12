const express = require("express");
const connectToMongo = require("./db");
const app = express(); 
const contactRoutes = require("./routes/contact");
const cors = require("cors");
const imageRoutes = require("./routes/imageRoutes");
 const corsOption ={

    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    
    Credentials: true,
 }


app.use(cors());


const port = 5000;
app.use(express.json());
app.use('/api/form', contactRoutes);

// Image upload API
app.use('/api/images', imageRoutes);

// Serve uploaded images statically
app.use('/uploads', express.static('uploads'));

connectToMongo();
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});