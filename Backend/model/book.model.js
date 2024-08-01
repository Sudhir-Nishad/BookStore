import mongoose from "mongoose";

// firstly we made a schema 
const bookSchema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String
})
const Book = mongoose.model("Book",bookSchema);
export default Book;