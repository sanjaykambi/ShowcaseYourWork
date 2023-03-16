const express = require("express")
const app = express();
const port = 8001|process.env.PORT
const hbs = require("hbs")
const bodyParse = require("body-parser")
app.use("/statics",express.static("public"))


// database
require("./model/database")
const Res = require("./model/response")
const Code = require("./model/code")

// engine tempelete
app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")

app.use(bodyParse.urlencoded({
    extended:true
}))

app.get("/",(req,res)=>{
    res.render("index");
})

//  ******************** code ***********************
app.get("/code",async(req,res)=>{
    try {
        const data = await Code.find().sort({_id:-1});
        res.render("code",{
            code : data
        })
    } catch (error) {
        res.send(error)
    }
})


// ********************* res *************************
app.get("/res",(req,res)=>{
    res.render("res");
})

app.post("/res",async(req,res)=>{
    try {
        const data = await Res.create({
            username : req.body.name,
            useremail : req.body.email,
            query : req.body.query
        }) 
        data.save();
        res.redirect("/");
    } catch (error) {
        res.send(error)
    }
})

app.listen(port,()=>{
    console.log(`Server is Running at port ${port}`)
})