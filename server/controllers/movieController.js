const Movie = require('../models/moviemodel')


exports.getAllMovies = async(req, res) =>{
   const movies = await Movie.find()
   return res.status(200).json(movies)
}
exports.getOneMovie = async(req, res) =>{
    const { id } = req.params;
    const movie = await Movie.findById(id)
    return res.status(200).json(movie)
}
exports.createMovies = async (req, res) => {
    const newMovie = new Movie({...req.body})
    const insertedMovie = await newMovie.save()
    return res.status(201).json(insertedMovie)
}
exports.updateMovie = async(req, res)=>{
    const { id } = req.params;
    await Movie.updateOne({_id: id}, {...req.body})
    const updatedMovie = await Movie.findById(id)
    return res.status(200).json(updatedMovie)
}

exports.deleteMovie = async(req, res) => {
   const { id } = req.params
   const movieToDelete = await Movie.findByIdAndDelete(id)
   return res.status(202).json(movieToDelete)
}