const express = require("express")
const db = require("./db");
const app = express()
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors(''))


const port = process.env.PORT || 8000;


app.get("/",(req,res)=>{
    res.send("<h2>Hi There !!! Bro </h2>")
})

// app.post("/insertData",(req,res)=>{
//     console.log(req.body)
//     const book_name = req.body.book_name;
//     const book_price = req.body.book_price;
//     console.log(book_name + " " + book_price);
//     const query = 'insert into books (book_name,book_price) values(?,?)';
//     db.query(query,[book_name,book_price], (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(result);
//           res.send(result)
//          }
//       })
// })

// app.get("/getAllBooks",(req,res)=>{
//     const query = "select * from books";
//     db.query(query,(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(result)
//             res.send(result)
//         }
//     })
// })

app.listen(port,()=>{
    console.log(`listining at port ${port}`)
})

