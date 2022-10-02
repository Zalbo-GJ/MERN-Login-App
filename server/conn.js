import mongoose from "mongoose";

const connDb = (url) =>{
   return  mongoose.connect(url)
}
export default connDb;