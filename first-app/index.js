const express = require("express");
const app = express()
console.dir(app)

// app.use((req, res) => {
//     console.log("We got a new request")
//     res.send({color: "red"})
// });
app.post('/', (req, res)=>{
    res.send("This is post request")
})
app.get('/cats', (req,res) => {
    // console.log("meaow!")
    res.send('Meow')
})
app.get('/dogs', (req,res) =>{
    // console.log("Woof!")
    res.send('Woof')
})
app.get('r/:subreddit/', (req,res)=>{
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit}</h1>`);
})
app.get('r/:subreddit/:postId', (req,res)=>{
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the postId of ${subreddit}</h1>`);
})
app.get('/search', (req,res)=>{
    console.log(req.query);
    const {q} = req.query;
    if(!q){
        res.send('nothing found nothing searched')
    }
    res.send({q});
})

app.listen(3000, () =>{
    console.log("Server started on port 3000")
});