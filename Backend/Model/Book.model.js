import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    category: String,
    image: String,
    price:String
    
})
const Book = mongoose.model("Book", bookSchema);
export default Book;