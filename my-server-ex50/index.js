const express=require("express");
const app=express();
const port=3003;
const morgan=require("morgan");
app.use(morgan("combined"));
const bodyParser=require("body-parser")
app.use(bodyParser.json())
//create default API
app.get("/",(req,res)=>{
    res.send("Hello Restful API") 
})
app.listen(port,()=>{
    console.log(`My Server listening on port ${port}`)
})

const cors=require("cors")
app.use(cors());

const path=require("path");
app.use("/static",express.static(path.join(__dirname,'public')));

let database=[
  {
    "BookName": "Giáo trình Tin học cơ bản",
    "Price": 26000.00,
    "Meta": "Nội dung của cuốn: Tin Học Cơ Bản Windows XP gồm có 7 chương: Chương 1: Một số vấn đề cơ bản. Chương 2: Sử dụng nhanh thanh công cụ và thanh thực đơn trong My Computer và Windows Explorer. Chương 3: Các thao tác trong Windows XP. Chương 4: Các thiết lập trong Windows XP. Chương 5: Bảo trì máy tính. Chương 6: Các phím tắt Chương 7: Hỏi và đáp các thắc mắc. Xin trân trọng giới thiệu cuốn sách cùng bạn",
    "Image": "THCB.jpg",
    "Date": "25/10/2014 12:00:00 SA",
    "Inventory": 120,
    "CDId": 7,
    "NXBId": 1
  },
  {
    "BookName": "Giáo trình Cơ Sở Dữ Liệu Với Visual Basic 2005 Và ADO.NET 2.0",
    "Price": 12000.00,
    "Meta": "Cuốn sách này gồm 3 phần sau: Phần 1: Xử lý văn bản trong Microsoft thiếu các nội dung sau: Chương 1: Căn bản về cơ sở dữ liệu. Chương 2: Các bộ kết nối và tương tác dữ liệu. Chương 3: Bộ chứa dữ liệu DataSet. Chương 4: Bộ điều hợp dữ liệu DataAdapter. Chương 5: Sử dụng các điều khiển ràng buộc dữ liệu. Chương 6: Tạo báo cáo với Crystal Report. Chương 7: ADO.NET và XML. Xin trân trọng giới thiệu cùng các bạn.",
    "Image": "TH004.jpg",
    "Date": "23/10/2013 12:00:00 SA",
    "Inventory": 25,
    "CDId": 3,
    "NXBId": 2
  },
  {
    "BookName": "Visual Basic 2005 Tập 3, Quyển 2: Lập Trình Web",
    "Price": 20000.00,
    "Meta": "Visual Basic 2005 Tập 3, Quyển 2: Lập Trình Web Với Cơ Sở Dữ Liệu sẽ cung cấp kỹ thuật và hướng dẫn bạn: Tự học xây dựng ứng dụng Web quản lý CSDL toàn diện với ADO.NET 2.0 và ASP.NET. Khai thác các đối tượng và nguồn dữ liệu dành cho WebForm. Sử dụng các điều khiển dữ liệu đặc thù dành riêng cho ASP.NET và Web. Làm quen với những khái niệm xử lý dữ liệu hoàn toàn mới. Ràng buộc dữ liệu với các thành phần giao diện Web Forms. Thiết kế ứng dụng Web \"Quản lý CD Shop\" trực quan và thực tế. Cung cấp một kiến thức hoàn chỉnh về Web cho các bạn yêu thích ngôn ngữ Visual Basic và .NET Framework. Sách có kèm theo CD-ROM bài tập.",
    "Image": "LTWeb2005.jpg",
    "Date": "15/09/2014 12:00:00 SA",
    "Inventory": 240,
    "CDId": 8,
    "NXBId": 4
  }
]

app.get("/ex50books",(req,res)=>{
    res.send(database)
})
app.get("/ex50books/:id",cors(),(req,res)=>{
    id=parseInt(req.params["id"])  // ✅ Convert thành number
    let p=database.find(x=>x.NXBId==id)
    res.send(p) 
})
app.post("/ex50books",cors(),(req,res)=>{ 
    //put json book into database
    database.push(req.body);
    //send message to client(send all database to client)
    res.send(database)
})
app.put("/ex50books/:id",cors(),(req,res)=>{
    id=parseInt(req.params["id"])
    let index=database.findIndex(x=>x.NXBId==id)
    if(index !== -1) {
        database[index] = req.body
        res.send(database[index])
    } else {
        res.status(404).json({error: "Book not found"})
    }
})
app.delete("/ex50books/:id",cors(),(req,res)=>{
    id=parseInt(req.params["id"])  // ✅ Convert thành number
    let index=database.findIndex(x=>x.NXBId===id)
    if(index !== -1) {
        database.splice(index, 1)  // ✅ Dùng splice để xóa
        res.send(database)
    } else {
        res.status(404).json({error: "Book not found"})
    }
})