const mongoose = require("mongoose")
const db = "mongodb+srv://bishu:8Dr0Cvs4zncTM0Of@cluster0.uul8ovz.mongodb.net/bisu?retryWrites=true&w=majority"
const db1 = "mongodb://localhost:27017/bishu"
mongoose.connect(db,{
    useNewUrlParser :true,
}).then(()=>{
    console.log("Connection Successfull")
}).catch(()=>{
    console.log("No connection")
})