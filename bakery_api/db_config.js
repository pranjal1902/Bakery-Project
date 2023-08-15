const mysql = require("mysql");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "demo"
    }
);


connection.connect((err)=>{
    if(err){
        console.log("Unable to connect database");
    }else{
        console.log("SQL Connected Success");
    }
})

module.exports = connection;