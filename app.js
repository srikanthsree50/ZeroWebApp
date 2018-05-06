const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const Router = require('./src/routes/route');

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.set('views','./src/views');
app.set('view engine','ejs');

app.use('/AddEvent',Router);


app.listen(port,()=>{
    console.log("server running at  "+port);
})