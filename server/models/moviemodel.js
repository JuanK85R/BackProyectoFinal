    const mongoose = require('mongoose')

// DEFINIR LA ESTRUCTURA DEL DOCUMENTO QUE SE VA A CREAR
const movieSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    adult: {
        type: Boolean,
    }, 
    original_language: {
        type: String
    },
    original_title:{
        type: String
    }, 
    overview: {
        type: String
    }, 
    poster_path: {
        type: String
    }, 
    release_date: {
        type: Date
    }
})
const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie

