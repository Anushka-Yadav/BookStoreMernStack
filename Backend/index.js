import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"
const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()
const port = process.env.PORT || 4000
  const uri = process.env.MONGODBURI;
//connect to mngodb

try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");

} catch (error) {
  console.log("could not connect");
  
}
//define route

app.use("/book", bookRoute)

app.use("/user",userRoute)


app.listen(port, () => {
  console.log(`BookStoreapp listening on port ${port}`)
})
