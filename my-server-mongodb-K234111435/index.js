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
database = client.db("PandaStore");

userCollection = database.collection("User");
categoryCollection = database.collection("Category");
productCollection = database.collection("Product");
employeeCollection = database.collection("Employee");
customerCollection = database.collection("Customer");
orderCollection = database.collection("Order");
orderDetailsCollection = database.collection("OrderDetails");

app.post("/categories", async (req,res)=>{
    try{
        const result = await categoryCollection.insertOne({
            name: req.body.name,
            description: req.body.description
        })
        res.json(result)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

app.post("/products", async (req,res)=>{
    try{
        const result = await productCollection.insertOne({
            name: req.body.name,
            price: req.body.price,
            model: req.body.model,
            madeBy: req.body.madeBy,
            categoryId: new ObjectId(req.body.categoryId),
            stock: req.body.stock
        })
        res.json(result)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

app.post("/customers", async (req,res)=>{
    try{
        const result = await customerCollection.insertOne({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address
        })
        res.json(result)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

app.post("/employees", async (req,res)=>{
    try{
        const result = await employeeCollection.insertOne({
            name:req.body.name,
            username:req.body.username,
            password:req.body.password,
            role:"employee"
        })
        res.json(result)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

app.post("/orders", async (req,res)=>{
    try{
        const result = await orderCollection.insertOne({
            customerId:new ObjectId(req.body.customerId),
            orderDate:new Date(),
            status:req.body.status,
            total:req.body.total
        })
        res.json(result)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

app.post("/orderdetails", async (req,res)=>{
    try{
        const result = await orderDetailsCollection.insertOne({
            orderId:new ObjectId(req.body.orderId),
            productId:new ObjectId(req.body.productId),
            quantity:req.body.quantity,
            price:req.body.price
        })
        res.json(result)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

app.get("/categories", async(req,res)=>{
 const result = await categoryCollection.find().toArray()
 res.json(result)
})

app.get("/products", async(req,res)=>{
    const result = await productCollection.find().toArray()
    res.json(result)
})

app.get("/products/:price", async(req,res)=>{
    const price = parseInt(req.params.price)
    const result = await productCollection.find({
        price:{$lte:price}
    }).toArray()
    res.json(result)
})

app.put("/products/:id", async (req,res)=>{
    try{

        const id = req.params.id;

        const result = await productCollection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set:{
                    name:req.body.name,
                    price:req.body.price,
                    model:req.body.model,
                    madeBy:req.body.madeBy,
                    stock:req.body.stock
                }
            }
        )

        res.json(result)

    }catch(err){
        res.status(500).json({error:err.message})
    }
})
app.delete("/products/:id", async (req,res)=>{
    try{

        const id = req.params.id;

        const result = await productCollection.deleteOne(
            { _id:new ObjectId(id) }
        )

        res.json(result)

    }catch(err){
        res.status(500).json({error:err.message})
    }
})


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
        role: req.body.role || "customer",
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

            res.json({
                success: true,
                message: 'Login successful',
                username: user.username,
                role: user.role
            });

        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

