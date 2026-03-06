const express = require('express');
const app = express();
const port = 3002;
const morgan=require("morgan")
app.use(morgan("combined"))
const bodyParser=require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const cors=require("cors");
app.use(cors());
app.listen(port,()=>{
console.log(`My Server listening on port ${port}`)
})
app.get("/",(req,res)=>{
res.send("This Web server is processed for MongoDB")
})
const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData"); 
fashionCollection = database.collection("Fashion");

app.get("/fashions",cors(),async (req,res)=>{ 
    const result = await fashionCollection.find({}).toArray();
    res.send(result)
    }
)
app.get("/fashions/:id", cors(), async (req, res) => {
    try {
        const id = req.params.id;
        const result = await fashionCollection.findOne({
            _id: new ObjectId(id)
        });
        if (!result) {
            return res.status(404).send("Not found");
        }
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.post("/fashions", async (req, res) => {
    try {
        const newFashion = req.body;
        const result = await fashionCollection.insertOne(newFashion);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put("/fashions/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = {
            fashion_subject: req.body.fashion_subject,
            fashion_detail: req.body.fashion_detail,
            fashion_image: req.body.fashion_image
        };
        const result = await fashionCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );
        if (result.matchedCount === 0) {
            return res.status(404).send("Fashion not found");
        }
        res.json({ message: "Update successful" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.delete("/fashions/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await fashionCollection.deleteOne({
            _id: new ObjectId(id)
        });
        if (result.deletedCount === 0) {
            return res.status(404).send("Not found");
        }
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const bcrypt = require("bcrypt");
userCollection = database.collection("User");

app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        const existing = await userCollection.findOne({ username });
        if (existing) {
            return res.status(400).send("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            username,
            password: hashedPassword,
            createdAt: new Date(),
            lastLogin: null
        };
        await userCollection.insertOne(newUser);
        res.json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userCollection.findOne({ username });
        if (!user) {
            return res.status(401).send("Invalid username");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Invalid password");
        }
        // update lastLogin
        await userCollection.updateOne(
            { _id: user._id },
            { $set: { lastLogin: new Date() } }
        );
        res.json({
            message: "Login successful",
            user: {
                _id: user._id,
                username: user.username,
                createdAt: user.createdAt,
                lastLogin: new Date()
            }
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/create-cookie",cors(),(req,res)=>{
    res.cookie("username","vickyphan")
    res.cookie("password","123456")
    account={"username":"vickyphan",
    "password":"123456"}
    res.cookie("account",account)
    res.send("cookies are created")
})

app.get("/read-cookie",cors(),(req,res)=>{
    //cookie is stored in client, so we use req
    username=req.cookies.username
    password=req.cookies.password
    account=req.cookies.account
    infor="username = "+username+"<br/>"
    infor+="password = "+password+"<br/>"
    if(account!=null)
    {
        infor+="account.username = "+account.username+"<br/>"
        infor+="account.password = "+account.password+"<br/>"
    } 
    res.send(infor) 
    //Expires after 360000 ms from the time it is set.
    res.cookie("infor_limit1", 'I am limited Cookie - way 1', {expire: 360000 + Date.now()}); 
    res.cookie("infor_limit2", 'I am limited Cookie - way 2', {maxAge: 360000});
})

app.get("/clear-cookie",cors(),(req,res)=>{
    res.clearCookie("account")
    res.send("[account] Cookie is removed") 
})

var session = require('express-session');
app.use(session({secret: "Shh, its a secret!"}));

app.get("/contact",cors(),(req,res)=>{
    if(req.session.visited!=null)
    {
        req.session.visited++
        res.send("You visited this page "+req.session.visited +" times")
    }
    else
    {
        req.session.visited=1
        res.send("Welcome to this page for the first time!")
    }
})