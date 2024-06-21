const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/moviesApp')
.then(() => {
  console.log('connection succesfull')
})
.catch((err) => {
  console.log('Oh shit !! error')
  console.log(err)
})
const movieSchema=mongoose.Schema({
  title:String,
  year:Number,
  Score:Number,
  rating:String
})
const Movie=mongoose.model('Movie',movieSchema)
// let amadeus=new Movie({title:'amadeus',year:1986,Score:9.2,rating:'R'})
//  amadeus.save()
// .then(() => {
//   console.log('movie added successfully')
// })
// .catch((err) => {
//   console.log('Oh no shit error !!!',err)
// })

// Movie.insertMany([
//   {title : 'Amelie', year : 2001 , Score : 8.3 , rating : 'R'},
//   {title : 'Alien',year : 1979 ,Score : 8.1 , rating  : 'R'},
//   {title : 'The Iron Giant', year : 1999 , Score : 7.5,rating : 'PG'},
//   {title : 'Stand by me' , year : 1986 , Score : 8.6,rating : 'R'},
//   {title : 'Monnrise kingdom',year : 2012,Score : 7.3,rating : 'PG-13'}
// ])
// .then((data) => {
//   console.log('Inserted movies',data)
// })
// .catch((err) => {
//   console.log('Error in inserting movies',err)
// })

// Movie.findOneAndUpdate({title : 'The Iron Giant'},{Score : 7.8},{new : true}).
// then((data) => {
//   console.log(data)
// })
// // .then((movies) => {
// //   console.log('All Movies',movies)
// // })
// .catch((err) => {
//   console.log('Error in updating ',err)
// })

// Movie.deleteOne({title : 'Amelie'}).then(msg => console.log(msg))

// Movie.deleteMany({year : {$gte : 1999}}).then(msg  => console.log(msg))

// Movie.findOneAndDelete({title : 'Alien'}).then(msg => console.log(msg))