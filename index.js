const express=require("express");
const app = express();
require("dotenv").config();
 const connectDB= require("./config/database");
 


 app.use(express.json());
connectDB();
app.use('/api/contact',require("./routes/route"))

//create server

app.listen(5001, async(err) =>
  err ? console.error(err) : console.log("server is running")
);
