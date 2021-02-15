
const express =require('express');
const app = express();
const port = 8000;  
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'static/public')));

app.get("/", (req, res)=> {
  res.sendFile(__dirname + '/static/public/index.html')
})

app.use((req,res)=> {
    res.status(404).send("Page Not Found")
})  

app.listen(port, ()=> console.log("listening on port " + port))