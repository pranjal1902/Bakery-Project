const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connection = require("../db_config");

//creating express app
const app = express();

//adding middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));


//defining routes
app.get("/api/services",(req,res)=>{
    connection.query("SELECT * FROM services",(err,data)=>{
        if(err){
            res.status(500).send("Some Error Occurred!");
        }else{
            res.status(200).send(data);
        }
    });
    // res.send("success")
})
app.post("/api/services",(req,res)=>{
    connection.query("INSERT INTO servives VALUES( )", (err,data)=>{
        if(err){
            res.status(500).send("Some Error Occurred!");
        }else{
            res.status(200).send(data);
        }
    });
})
app.put("/api/services/:id",(req,res)=>{
    connection.query("UPDATE services SET ( )",(err,data)=>{
        if(err){
            res.status(500).send("Some Error Occurred!");
        }else{
            res.status(200).send(data);
        }
    });
})
app.delete("/api/services/:id",(req,res)=>{
    connection.query("DELETE FROM services WHERE condition;",(err,data)=>{
        if(err){
            res.status(500).send("Some Error Occurred!");
        }else{
            res.status(200).send(data);
        }
    });
})


app.get("/api/blogs",(req,res)=>{
    connection.query("SELECT * FROM blogs",(err,data)=>{
        if(err){
            res.status(500).send("Some Error Occurred!");
        }else{
            res.status(200).send(data);
        }
    });
})
app.post("/api/blogs",(req,res)=>{
    connection.query("INSERT INTO blogs VALUES()",(err,data)=>{
        if(err){
            res.status(500).send("Some Error Occurred!");
        }else{
            res.status(200).send(data);
        }
    });
})
app.put("/api/blogs",(req,res)=>{
    connection.query("UPDATE blogs SET ()",(err,data)=>{
        if(err){
            res.status(500).send("Some Error Occurred!");
        }else{
            res.status(200).send(data);
        }
    });
})
app.delete("/api/blogs",(req,res)=>{
    connection.query("DELETE FROM blogs WHERE condition;",(err,data)=>{
        if(err){
            res.status(500).send("Some Error Occurred!");
        }else{
            res.status(200).send(data);
        }
    });
})
app.post("/api/contact",(req,res)=>{
    connection.query("INSERT INTO contacts VALUES()",(err,data)=>{
        if(err){
            res.status(500).send("Some Error Occurred!");
        }else{
            res.status(200).send(data);
        }
    });
})

app.get("/api/contacts",(req,res)=>{
    connection.query("SELECT * FROM contacts",(err,data)=>{
        if(err){
            res.status(500).send("Some Error Occurred!");
        }else{
            res.status(200).send(data);
        }
    });
})


//listening on 3001
app.listen(3001,()=>{
    console.log('listening on port 3001');
})