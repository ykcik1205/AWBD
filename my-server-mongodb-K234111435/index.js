const express = require('express');
const bcrypt = require('bcrypt');
bcrypt.hash("123", 10).then(hash => console.log(hash));
const app = express();
const port = 3005;
app.use(express.json())

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
database = client.db("UserData");
userCollection = database.collection("User");

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await userCollection.findOne({ username });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        await userCollection.insertOne({
            username: username,
            password: hashPassword,
            createdAt: new Date(),
            lastLogin: null
        });
        res.json({ success: true, message: "User created" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.post("/login", cors(), async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userCollection.findOne({ username });
        if (!user) {
            return res.json({ success: false, message: 'Invalid username or password' });
        }
       
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});