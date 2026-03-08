const express=require("express")
const app=express()
const port =3004
const morgan=require("morgan")
app.use(morgan("combined"))
//create default API
app.get("/",(req,res)=>{
    res.send("Xin chào quý khách!")
})
app.listen(port,()=>{
    console.log(`My Server is starting at port =${port}`)
})

const cors=require("cors")
app.use(cors())

const bodyParser=require("body-parser")
app.use(bodyParser.json())

const path=require("path")
app.use("/static",express.static(path.join(__dirname,"public")))