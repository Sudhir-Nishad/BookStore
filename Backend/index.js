// For using import method to import packages , we will use type=module in package.json
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"
import cors from "cors"
const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connection to mongoDB
try {
    mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
    
} catch (error) {
    console.log("Error: ",error);
}

// defining routes 
app.use("/book",bookRoute)
app.use("/user",userRoute)


// app.get("/",(req,res)=>{
//     res.send("Hello World")
// });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
