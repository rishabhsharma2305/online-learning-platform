const { Console } = require('console');
const express= require('express');
const hbs= require('hbs');
const path= require('path');
const app= express();
const fs= require('fs');
var bodyParser = require('body-parser');
const { json } = require('express');



app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('./img'));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'/LandingPage.html'));
})


app.get("/teacher",(req,res)=>{
    res.sendFile(path.join(__dirname,'/teacher.html'));
}
)
app.get("/student",(req,res)=>{
    res.sendFile(path.join(__dirname,'/student.html'));
}
)
app.get("/addCourse",(req,res)=>{
    res.sendFile(path.join(__dirname,'/addCourse.html'));
})
app.get("/addQuiz",(req,res)=>{
    res.sendFile(path.join(__dirname,'/quiz.html'));
})
app.get("/seeQuiz",(req,res)=>{
    var data= fs.readFileSync('newQuiz.json','utf-8');
    res.sendFile(path.join(__dirname,'/newQuiz.json'));
})
app.post("/addCourse",(req,res)=>{
    var formData= req.body;
    var courseData= fs.readFileSync('newCourse.json','utf-8');
    jsonData= JSON.parse(courseData);
    jsonData.push(formData);
    stringData= JSON.stringify(jsonData);
    fs.writeFileSync('newCourse.json',stringData);
    res.write("<h2>Course added successfully</h2>");
    res.end();
})

app.post("/addQuestion",(req,res)=>{
    var formData= req.body;
    var courseData= fs.readFileSync('newQuiz.json','utf-8');
    jsonData= JSON.parse(courseData);
    jsonData.push(formData);
    stringData= JSON.stringify(jsonData);
    fs.writeFileSync('newQuiz.json',stringData);
    res.write("<h2>Question added successfully</h2>");
    res.end();
})
app.get("/isData",(req,res)=>{
    var data= fs.readFileSync('newCourse.json','utf-8');
    res.sendFile(path.join(__dirname,'/newCourse.json'));

})
app.listen(8000,()=>{
    console.log("running on 8000");
})