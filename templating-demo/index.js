const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res)=>{
    // res.send("./")
    res.render('home')
})
app.get('/cats', (req,res) =>{
    const cats = [
        'blue', 'rocket', 'monty', 'stephanie', 'winston'
    ]
    res.render('cats', {cats})
})
app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit});
})
app.get('/rand', (req,res)=>{
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {num})
})
app.listen(3000, ()=>{
    console.log("Server started on port 3000")
})