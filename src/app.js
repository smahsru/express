const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');


// paths
const pathOfStaticPage = path.join(__dirname, '../public');
// const pathOfStaticPage = path.join(__dirname, '../templates/views');
const dynamicPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');
app.use(express.static(path.join(pathOfStaticPage)))

app.set('view engine', 'hbs');
app.set('views',dynamicPath)
hbs.registerPartials(partialsPath)





app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404page')
})
app.listen(3000)