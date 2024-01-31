const express=require("express")
const path=require("path")
const app=express();
const port =4000
const cors = require('cors');
const mongoDB=require("./db")
mongoDB();

app.use(cors());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})
app.get('/',(req,res)=>{
    res.send('Hello World!')
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use(express.static(path.resolve(__dirname,'build')))


app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})


