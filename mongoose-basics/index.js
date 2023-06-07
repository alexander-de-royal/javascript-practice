const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(()=>{
        console.log("Connection Open!")
    })
    .catch(err => {
        console.log("Oh! no error!!!")
    })

const movies = [
    {
    title: 'Amadeus',
    year: 1986,
    review: 9.2,
    rating: 'R'
    }]

const movieSchema = new mongoose.Schema({
    Title: String,
    Year: Number,
    Score: Number,
    Rating: String
})

const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie ({title: 'Amadeus', Year: 1986, Score: 9.2, Rating: "Good"})

Movie.insertMany([
    {title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
    {title: 'Alien', year: 1979, score: 8.1, rating: 'R'}
])
    .then(data => {
        console.log(data);
    })
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (){
//     console.log("connection open!")
// })