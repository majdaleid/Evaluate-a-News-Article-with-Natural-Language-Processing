 
// Add headers before the routes are defined
const fetch = require('node-fetch');
var cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();


console.log(`Your API key is ${process.env.API_KEY}`);
  const api=process.env.API_KEY;

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

 


app.use(cors({origin: 'http://localhost:8080'}));



app.use(express.static('dist'))

console.log(__dirname)
/*
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

*/




app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    
  // res.send(process.env.API_KEY);
    res.send(mockAPIResponse)
})
/*
let projectData = {  };
app.get('/test1', function (req, res) {
    projectData['key']=process.env.API_KEY;
   // res.send("hello from the server")
    res.send(projectData);
      
  })
  */

  
// POST route
app.post('/add', async (req,res) =>{
  const ff=req.query.ff;
const baseURL=`https://api.meaningcloud.com/sentiment-2.1`;
//let formText=document.getElementById('name').value;
let formText="Main dishes were quite good, but desserts were too sweet for";
let lang=`EN`;
let api_key2 = process.env.API_KEY;

var data=await postData(baseURL,{key:api_key2 , txt:ff , lang:"en"});
   res.send(data);


});


const postData=async (url='',data={})=>{
  const response=await fetch(url,{
      method: 'POST', // The method
      credentials:'same-origin',
      headers:{
          'Content-Type':'application/json',
          
      },
      body:JSON.stringify(data),
  });
  try{
      const newData=await response.json();
      
      console.log(newData);
   
     return newData
  }catch(error){
      console.log("error",error);
  }
  
  }